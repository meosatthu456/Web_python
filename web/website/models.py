from django.db.models.signals import post_save
from django.conf import settings
from django.db import models
from django.db.models import Sum
from django.shortcuts import reverse
from django.utils import timezone


# Create your models here.

class Category(models.Model):
    title = models.CharField(default='',max_length=100)
    slug = models.CharField(default='',max_length=100)

    # class Meta:
    #     ordering = 'name'

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return f'/{self.slug}/'

class Product(models.Model):
    category = models.ForeignKey(Category, related_name='products', on_delete=models.CASCADE)
    title = models.CharField(default='',max_length=100)
    description = models.TextField(default='')
    active = models.BooleanField(default=True)
    price = models.IntegerField(default=0)
    category = models.ForeignKey(Category, on_delete= models.CASCADE)
    img = models.ImageField(null=True)
    slug = models.SlugField()
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return self.title

    def get_absolute_url(self):
        return reverse("web:proinfo", kwargs={
            'slug':self.slug
        })

    def get_absolute_url_with_cat(self):
        return f'/{self.category.slug}/{self.slug}/'


    def get_add_to_cart_url(self):
        return reverse("web:add-to-cart", kwargs={
            'slug': self.slug
        })

    def get_remove_from_cart_url(self):
        return reverse("web:remove-from-cart", kwargs={
            'slug': self.slug
        })


class OrderItem(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    ordered = models.BooleanField(default=False)
    item = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

    def __str__(self):
        return f"{self.quantity} of {self.item.title}"

    def get_total_item_price(self):
        return int(self.quantity * self.item.price)

    # def get_amount_saved(self):
    #     return self.get_total_item_price() - self.get_total_discount_item_price()
    #
    # def get_final_price(self):
    #     if self.item.discount_price:
    #         return self.get_total_discount_item_price()
    #     return self.get_total_item_price()


class Order(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE)
    items = models.ManyToManyField(OrderItem)
    create = models.DateTimeField(default = timezone.now)
    ordered = models.BooleanField(default=False)
    shipinfor = models.ForeignKey(
        'ShipInfor', related_name='shipinfor', on_delete=models.SET_NULL, blank=True, null=True)
    def get_total(self):
        total = 0
        for order_item in self.items.all():
            total += order_item.get_total_item_price()
        return total

    def __str__(self):
        return self.user.username

class ShipInfor(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    address = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=100)
    default = models.BooleanField(default=False)

    def __str__(self):
        return self.user.username

    class Meta:
        verbose_name_plural = 'ShipInfor'

# class Customer(models.Model):
#     full_name = models.CharField(max_length=255)
#     phone = models.CharField(max_length=255)
#     address = models.CharField(max_length=255)
#     content = models.TextField(default='')
#     # order = models.ForeignKey(Order, on_delete=models.CASCADE)
#     def __str__(self):
#         return self.full_name
