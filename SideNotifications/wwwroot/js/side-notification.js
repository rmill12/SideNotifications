let SideNotificationViewModel = function () {
    let _self = this;

    // Public objects
    _self.NotificationSettings = function (value, description, url) {
        let _this = this;
        _this.Value = "";
        _this.Description = "";
        _this.Url = "";
        if (value) {
            _this.Value = value;
        };
        if (description) {
            _this.Description = description;
        };
        if (url) {
            _this.Url = url;
        };
    };

    // Private functions
    let add = function (notificationCssClass, settings) {
        if (settings instanceof _self.NotificationSettings != true) {
            console.error("Nofification settings are not of type 'NotificationSettings'");
            return;
        };
        let $wrapper = $("#SideNotifications");
        if ($wrapper.length <= 0) {
            $wrapper = $("<div id='SideNotifications'></div>");
            $("body").append($wrapper);
        };
        let $element = $("<div class='side-notification " + notificationCssClass + "'></div>");

        let $value = $("<div class='value'></div>");
        $value.html(settings.Value);
        $element.append($value);

        let $description = $("<div class='description'></div>");
        $description.text(settings.Description.length > 50 ? settings.Description.substring(0, 50) + "..." : settings.Description);
        $element.append($description);

        $element.attr("title", settings.Description);

        if (settings.Url != null && settings.Url.length > 0) {
            $description.css({ cursor: "pointer" });

            $description.click(function (e) {
                e.preventDefault();
                window.open(settings.Url, "_blank");
            });
        };
        $wrapper.append($element);
        return $element;
    };

    // Public functions
    _self.addTypeA = function (settings) {
        add('side-notification-a', settings);
    };
    _self.addTypeB = function (settings) {
        add('side-notification-b', settings);
    };
    _self.addTypeC = function (settings) {
        add('side-notification-c', settings);
    };
};