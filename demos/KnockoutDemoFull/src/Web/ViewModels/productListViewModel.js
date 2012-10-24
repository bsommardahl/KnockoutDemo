var ProductsListViewModel = function (isLoggedIn, toastr) {

    //these are our private fields
    var products = ko.observableArray();
    var totalDebit = ko.observable(0);
    var totalCredit = ko.observable(0);
    var totalCash = ko.observable(0);
    var totalProfit = ko.observable(0);
    
    var productCount = ko.computed(function () {
        return products().length;
    });

    var debit = function (amount) {
        totalDebit(totalDebit() + amount);
        totalCash(totalCash() - amount);        
    };

    var credit = function (product) {
        totalCredit(totalCredit() + product.Price());
        totalCash(totalCash() + product.Price());
        totalProfit(totalProfit() + (product.Price() - product.Cost()));
    };
        
    var editProduct = function (product) {        
        var div = $("<div>");
        div.load("Content/Partials/editProduct.html", function () {
            var viewModel = new editProductViewModel(product, onSaveProduct, onRemoveProduct);
            ko.applyBindings(viewModel, div[0]);
            $("body").append(div);
            div.dialog({
                title: "Editing Product: " + product.Name(),
                modal: true,
                width: 500                
            });            
        });
        
        var onSaveProduct = function (editedProduct) {
            var originalProduct = ko.utils.arrayFirst(products(), function (p) {
                return p.Id == editedProduct.Id;
            });
            products.replace(originalProduct, editedProduct);
            div.dialog('close');
            toastr.success(editedProduct.Name() + " has been saved.");
        };

        var onRemoveProduct = function (removedProduct) {
            products.remove(removedProduct);
            div.dialog('close');
            toastr.warning(removedProduct.Name() + " has been removed.");
        };
    };

    //get products from the json api
    $.ajax({
        url: "api/products",
        success: function (productsResponse) {
            $.each(productsResponse, function (index, product) {
                products.push(new productViewModel(product, credit, debit, totalCash, isLoggedIn, toastr));
            });
            setInitialDebit();
        }
    });

    var setInitialDebit = function () {
        var total = 0;
        $.each(products(), function(index, product) {
            total = total + (product.Quantity() * product.Cost());            
        });
        totalDebit(total);
    };
    
    //these are our publicly accessible properties
    return {
        Products: products,
        ProductCount: productCount,
        TotalCredit: totalCredit,
        TotalDebit: totalDebit,
        TotalCash: totalCash,
        TotalProfit: totalProfit,
        EditProduct: editProduct,
        IsLoggedIn: isLoggedIn
    };
};
