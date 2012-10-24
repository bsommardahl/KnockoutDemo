var productViewModel = function (product, credit, debit, totalCash, isLoggedIn, toastr) {

    var name = ko.observable(product.Name);
    var price = ko.observable(product.Price);
    var cost = ko.observable(product.Cost);
    var quantity = ko.observable(product.Quantity);
    var sold = ko.observable(0);

    var buy = function () {
        quantity(quantity() + 1);
        debit(cost());
        toastr.info("1 " + name() + " purchased.");
    };

    var sell = function () {
        quantity(quantity() - 1);
        sold(sold() + 1);
        credit(this);
        toastr.success("1 " + name() + " sold.");
    };

    var canSell = ko.computed(function () {
        return quantity() > 0;
    });

    var canBuy = ko.computed(function () {
        return totalCash() >= product.Cost;
    });
    
    return {
        Id: product.Id,
        Name: name,
        Price: price,
        Cost: cost,
        ImageUrl: product.ImageUrl,

        Quantity: quantity,
        Sold: sold,
        
        Buy: buy,
        Sell: sell,
        CanSell: canSell,        
        CanBuy: canBuy,
        IsLoggedIn: isLoggedIn        
    };
};