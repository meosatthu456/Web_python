from django.shortcuts import render, render_to_response, get_object_or_404, redirect
from django.views import View
from django.core.exceptions import ObjectDoesNotExist
from django.contrib.auth.decorators import login_required
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Category,Product,Order,OrderItem, ShipInfor
from django.http import HttpResponse
from django.template.loader import render_to_string
from django.views.generic import ListView, DetailView
from django.contrib import messages
from .forms import CheckoutForm
# Create your views here.


#
# class HomeView(ListView):
#     paginate_by = 10
#     model = Product
#     template_name = "page/products.html"

class HomeView(ListView):
    paginate_by = 10
    model = Product
    template_name = "page/products.html"
    list_cat =  Category.objects.all()

# def Category(request):
#     list_cat =  Category.objects.all()
#     return render(request,"page/products.html",{"listcat":list_cat})



# def Productcat(request, id):
#     list_cat =  Category.objects.all()
#     list_pro_cat = Product.objects.filter(category = id)
#     return render(request,"page/productcat.html",{"listcat":list_cat,"listpro":list_pro_cat})


class ProductDetailView(DetailView):
    model = Product
    template_name = "page/pro_info.html"


class CheckoutView(View):
    def get(self, *args, **kwargs):
        form = CheckoutForm()
        context = {
            'form':form
        }
        return render(self.request, "page/checkout.html",context)

    def post(self, *args, **kwargs):
        form = CheckoutForm(self.request.POST or None)
        try:
            order = Order.objects.get(user=self.request.user, ordered=False)
            if form.is_valid():
                shipping_address = form.cleaned_data.get("shipping_address")
                name = form.cleaned_data.get("name")
                phone = form.cleaned_data.get("phone")
                shipinfor = ShipInfor(
                    user=self.request.user,
                    address=shipping_address,
                    name=name,
                    phone=phone,
                )
                shipinfor.save()
                order.shipinfor = shipinfor
                order.save()
                return redirect('/')
        except ObjectDoesNotExist:
            messages.warning(self.request, "You do not have an active order")
            return redirect("wed:order-summary")
        messages.warning(self.request, "Thanh toán không thành công")
        return redirect('web:checkout')

class OrderSummaryView(LoginRequiredMixin,View):
    def get(self, *args, **kwargs):
        try:
            order = Order.objects.get(user=self.request.user, ordered=False)
            context = {
                'object': order
            }
            return render(self.request, 'page/shoppingcart.html', context)
        except ObjectDoesNotExist:
            messages.warning(self.request, "You do not have an active order")
            return redirect("/")


@login_required
def add_to_cart(request, slug):
    item = get_object_or_404(Product, slug = slug)
    order_item, created  = OrderItem.objects.get_or_create(
        item = item,
        user = request.user,
        ordered = False
    )
    order_qs = Order.objects.filter(user = request.user, ordered = False)
    if order_qs.exists():
        order = order_qs[0]
        if order.items.filter(item__slug = item.slug).exists():
            order_item.quantity += 1
            order_item.save()
            messages.info(request, "This item quantity was updated.")
            return redirect("web:order-summary")
        else:
            order.items.add(order_item)
            messages.info(request, "This item was added to your cart.")
            return redirect("web:order-summary")
    else:
        order = Order.objects.create(user = request.user)
        order.items.add(order_item)
        messages.info(request, "This item was added to your cart.")
        return redirect("web:order-summary")

@login_required
def remove_from_cart(request, slug):
    item = get_object_or_404(Product, slug=slug)
    order_qs = Order.objects.filter(
        user=request.user,
        ordered=False
    )
    if order_qs.exists():
        order = order_qs[0]
        # check if the order item is in the order
        if order.items.filter(item__slug=item.slug).exists():
            order_item = OrderItem.objects.filter(
                item=item,
                user=request.user,
                ordered=False
            )[0]
            order.items.remove(order_item)
            order_item.delete()
            messages.info(request, "This item was removed from your cart.")
            return redirect("web:order-summary")
        else:
            messages.info(request, "This item was not in your cart")
            redirect("web:proinfo",slug =slug)
    else:
        messages.info(request, "You do not have an active order")
        return redirect("web:proinfo",slug =slug)

    return redirect("web:proinfo",slug =slug)

@login_required
def remove_single_item_from_cart(request, slug):
    item = get_object_or_404(Product, slug=slug)
    order_qs = Order.objects.filter(
        user=request.user,
        ordered=False
    )
    if order_qs.exists():
        order = order_qs[0]
        # check if the order item is in the order
        if order.items.filter(item__slug=item.slug).exists():
            order_item = OrderItem.objects.filter(
                item=item,
                user=request.user,
                ordered=False
            )[0]
            if order_item.quantity > 1:
                order_item.quantity -= 1
                order_item.save()
            else:
                order.items.remove(order_item)
            messages.info(request, "This item was removed from your cart.")
            return redirect("web:order-summary")
        else:
            messages.info(request, "This item was not in your cart")
            redirect("web:order-summary",slug =slug)
    else:
        messages.info(request, "You do not have an active order")
        return redirect("web:proinfo",slug =slug)

    return redirect("web:proinfo",slug =slug)

# def Cat(request):
#     list_cat =  Category.objects.all()
#     # allproduct = Product.objects.all()
#     # product_cat = Product.objects.get(pk = )
#     return render(request,"/page/products.html",{"listcat":list_cat})




#   def Proinfo(request, pro_id):
#     list_cat =  Category.objects.all()
#     pro_ = Product.objects.get(pk = pro_id)
#     return render(request,"page/pro_info.html",{"listcat":list_cat,"pro":pro_})

# cart = {}
# def addcart(request):
#     if request.is_ajax():
#         id = request.POST.get('id')
#
#     pro_detail = Product.objects.get(pk = id)
#
#     if id in cart.keys():
#         item_cart = {
#             'name':pro_detail.title,
#             'price':pro_detail.price,
#             'img':str(pro_detail.img),
#             'num':int(cart[id]['num'])+1,
#         }
#     else:
#         item_cart = {
#             'name': pro_detail.title,
#             'price': pro_detail.price,
#             'img': str(pro_detail.img),
#             'num': 1,
#         }
#     order = Order
#
#     order_item = OrderItem
#     order_item.item = pro_detail.id
#     order.items = order_item
#
#     order.save()
#     order_item.save()
#
#     cart[id] = item_cart
#     request.session['cart'] = cart
#     cart_info = request.session['cart']
#     html = render_to_string('page/addcart.html',{'cart':cart_info})
#     return HttpResponse(html)
#
# def shoppingcart(request):
#     list_cat = Category.objects.all()
#     carts = request.session['cart']
#     total = 0
#     order = Order
#     for key,value in carts.items():
#         total += int(value['price'])
#
#     cf = Cus_Form
#     order.user = cf.id
#     order.save()
#     return render(request,'page/shoppingcart.html',{"listcat":list_cat,'total':total,'cf':cf})
#
# def getshoping(request):
#     if request.method == "POST":
#         cf = Cus_Form(request.POST)
#         if cf.is_valid():
#             cf.save()
#             return HttpResponse("successfull!!")
#     else:
#         return HttpResponse("not post")
#
