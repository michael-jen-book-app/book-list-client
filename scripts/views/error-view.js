const errorView = {};

(function(module) {
    errorView.initErrorPage(err) = {
        $('.container').hide();
        $('.error-view').show();
        $('#error-message').empty();

        let template= Handlebars.compile($(`error-template`).text());
        $('#error-message').append(template(err));
    }
    function errorCallBack(error){
        console.error(error);
        errorView.initErrorPage(err);
    }
    module.errorView = errorView;
}(errorView))
