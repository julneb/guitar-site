function ToggleBtn(firstBtnId, secondBtnId)
{

}

function ColorSchemeSwitcher()
{
    var $blockToSwitchClass = $('.' + BG_BLOCK_CLASS);
    var buttons = {
        "day": $('#' + COMMON_SETTINGS_BLOCK_DAY_COLOR_BTN_ID),
        "night": $('#' + COMMON_SETTINGS_BLOCK_NIGHT_COLOR_BTN_ID)
    };
    var currentScheme = "night";

    function resetScheme()
    {
        COLOR_SCHEMES_CLASSES.forEach(function(item) {$blockToSwitchClass.toggleClass(item, false)});
    }

    this.saveToCookies = function()
    {
        Cookies.set("colorScheme", currentScheme);
    }

    this.switchScheme = function(scheme)
    {
        var isSchemeExist = COLOR_SCHEMES_CLASSES.indexOf(scheme) >= 0;
        if (isSchemeExist)
        { 
            currentScheme = scheme;
            resetScheme();
            $blockToSwitchClass.toggleClass(currentScheme, true);
            this.saveToCookies();
        }
    }

    this.onSwitchToDayColorBtn = function(event)
    {
        var that = event.data.that;
        $(this).hide();
        buttons["night"].show();
        that.switchScheme("day");
    }

    this.onSwitchToNightColorBtn = function(event)
    {
        var that = event.data.that;
        $(this).hide();
        buttons["day"].show();
        that.switchScheme("night");
    }

    this.initButtons = function()
    {
        if (currentScheme == "day")
        {
            buttons["day"].hide();
        }
        else
        {
            buttons["night"].hide();
        }

        buttons["day"].click({that: this}, this.onSwitchToDayColorBtn);
        buttons["night"].click({that: this}, this.onSwitchToNightColorBtn);
    }

    this.init = function()
    {
        if (Cookies.getJSON("colorScheme") !== undefined)
        {
            currentScheme = Cookies.getJSON("colorScheme");
        }
        this.switchScheme(currentScheme);
        this.initButtons();
    }
}

var commonSettings = {
    $openBtn: $('#' + COMMON_SETTINGS_BTN_ID),
    $closeBtn: $('#' + COMMON_SETTINGS_BLOCK_CLOSE_BTN_ID),
    $settingsBlock: $('#' + COMMON_SETTINGS_BLOCK_ID),
    isShown: false,
    colorSchemeSwitcher: new ColorSchemeSwitcher(),

    showMenuToggle: function(isShow)
    {
        if (isShow)
        {
            this.$settingsBlock.slideDown(100);
        } 
        else
        {
            this.$settingsBlock.slideUp(100);
        }
    },

    onOpenBtnClick: function(event)
    {
        var that = event.data.that;
        that.isShown = !that.isShown;
        that.showMenuToggle(that.isShown);
    },

    onCloseBtnClick: function(event)
    {
        var that = event.data.that;
        that.isShown = false;
        that.showMenuToggle(that.isShown);
    },

    init: function()
    {
        this.$settingsBlock.toggleClass(COMMON_SETTINGS_BLOCK_HIDE_CLASS, false);
        this.$settingsBlock.hide();
        this.$openBtn.click({that: this}, this.onOpenBtnClick);
        this.$closeBtn.click({that: this}, this.onCloseBtnClick);
        this.$settingsBlock.parent().on("clickoutside", {that: this}, this.onCloseBtnClick);
        this.colorSchemeSwitcher.init();
    }
}
