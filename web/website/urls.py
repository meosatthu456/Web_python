from django.urls import path,include
from .views import (
    HomeView,
    # Productcat,
    ProductDetailView,
    add_to_cart,
    remove_from_cart,
    OrderSummaryView,
    remove_single_item_from_cart,
    CheckoutView,
    Category,
)

app_name = 'web'
urlpatterns = [
    path('',HomeView.as_view() , name = "Home"),
    # path('', Category, name="Home"),
    path('checkout/', CheckoutView.as_view(), name="checkout"),
    path('page/pro_info/<slug>/', ProductDetailView.as_view(), name = "proinfo" ),
    path('add-to-cart/<slug>/', add_to_cart, name="add-to-cart"),
    path('remove-from-cart/<slug>/', remove_from_cart, name="remove-from-cart"),
    path('order-summary/', OrderSummaryView.as_view(), name="order-summary"),
    path('remove-item-from-cart/<slug>/', remove_single_item_from_cart, name="remove-single-item-from-cart"),

    # path('page/productcat/<int:id>', Productcat, name="productcat"),
    # path('home/addcart',addcart, name="addcart"),
    # path('home/shoppingcart',shoppingcart, name="shoppingcart"),
    # path('home/order',getshoping , name="order_success"),
]