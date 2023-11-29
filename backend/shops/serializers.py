from rest_framework import serializers
from .models import Shop, Item, CartItem


class ItemSerializer(serializers.ModelSerializer):
    shop_name = serializers.CharField(source='shop.name', read_only=True)

    class Meta:
        model = Item
        fields = ['id', 'name', 'image_url',
                  'description', 'price', 'shop', 'shop_name']


class ShopSerializer(serializers.ModelSerializer):
    items = ItemSerializer(many=True, read_only=True)

    class Meta:
        model = Shop
        fields = '__all__'


class CartItemSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.user_id')
    item = serializers.PrimaryKeyRelatedField(queryset=Item.objects.all())

    class Meta:
        model = CartItem
        fields = ['id', 'user', 'item', 'quantity']
