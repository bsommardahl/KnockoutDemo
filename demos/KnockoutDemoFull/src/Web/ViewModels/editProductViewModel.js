var editProductViewModel = function(product, onProductSaved, onProductRemoved) {

    //here are the observable fields
    var name = ko.observable(product.Name());
    //notice the price and cost fields have an extender. This ensures that input is regarded as a number.
    var price = ko.observable(product.Price()).extend({ numeric: 0 });
    var cost = ko.observable(product.Cost()).extend({ numeric: 0 });

    var profitPerItem = ko.computed(function() {
        return price() - cost();
    });

    var projectedProfitForQuantity = ko.computed(function() {
        return profitPerItem() * product.Quantity();
    });

    var save = function() {

        //apply the edited values to the product
        product.Name(name());
        product.Price(price());
        product.Cost(cost());

        //send the product out
        onProductSaved(product);
    };

    var remove = function () {
        onProductRemoved(product);
    };

    var canRemove = ko.computed(function () {
        return product.Quantity() == 0;
    });

    return {
        Name: name,
        Price: price,
        Cost: cost,
        ImageUrl: product.ImageUrl,
        Quantity: product.Quantity,
        ProfitPerItem: profitPerItem,
        ProfitForQuantity: projectedProfitForQuantity,

        CanRemove: canRemove,
        Save: save,
        Remove: remove
    };
};