var menuItems = {
    itemsNumber: 0,
    items: {},
    itemsSerializedStates: {},

    getIDforNewItem: function()
    {
        var digit = 0
        while (this.items[ITEMS_ID_BASE + digit] !== undefined)
        {
            digit++;
        }
        return (ITEMS_ID_BASE + digit);
    },
    
    deleteItem: function(id)
    {
        if (this.itemsNumber == MAX_ITEMS_NUMBER)
        {
            this.$addNewItemBtn.show(200);
        }
        if (delete(this.items[id]))
        {
            delete(this.itemsSerializedStates[id]);
            this.updateItemsQueryParams();
            this.itemsNumber--;
        }
    },
    
    updateItemsQueryParams: function()
    {
        var urlString = '?';
        for (var i = 0; i < MAX_ITEMS_NUMBER; i++)
        {
            var id = ITEMS_ID_BASE + i;
            if (this.itemsSerializedStates[id] !== undefined)
            {
                if (i != 0)
                {
                    urlString += '&';
                }
                var encodedParameter = this.itemsSerializedStates[id].getJSON();
                urlString += 'i' + i + '=' + this.encodeQueryParamString(encodedParameter);
            }
        }
        history.replaceState({}, "", urlString);
    },
    
    updateItemSerializedData: function(id, data)
    {
        if (!this.itemsSerializedStates[id])
        {
            this.itemsSerializedStates[id] = new ItemSerializedState(data);
        }
        this.itemsSerializedStates[id].setJSON(data);
    },

    createNewItem: function()
    {
        var id = this.getIDforNewItem();
        if (this.itemsNumber < MAX_ITEMS_NUMBER)
        {
            this.items[id] = new ItemBase(id);
            this.itemsNumber++;
        }
        else
        {
            this.$addNewItemBtn.hide(200);
        }
    },
    
    createItemsFromQueryParams: function(itemsSerializedStates)
    {
        for (var i = 0; (i < itemsSerializedStates.length) && (i < MAX_ITEMS_NUMBER); i++)
        {
            var id = this.getIDforNewItem();
            this.items[id] = new ItemBase(id, itemsSerializedStates[i].getJSON());
            this.itemsNumber++;
        }
        if (this.itemsNumber >= MAX_ITEMS_NUMBER)
        {
            this.$addNewItemBtn.hide(200);
        }
    },

    readItemsQueryParams: function()
    {
        var url = window.location.href;
        var index = url.indexOf('?');
        var parameters = [];
        var itemsSerializedStates = [];
        if (index != -1)
        {
            var parametersStr = url.slice(index + 1);
            parameters = parametersStr.split('&');
            for (var i = 0; (i < parameters.length) && (i < MAX_ITEMS_NUMBER); i++)
            {
                var index = parameters[i].indexOf('=');
                if (index != -1)
                {
                    var parameter = parameters[i].slice(index + 1);
                    parameter = this.decodeQueryParamString(parameter);
                    itemsSerializedStates.push(new ItemSerializedState(parameter));
                }
            }
        }
        return itemsSerializedStates;
    },

    encodeQueryParamString: function(str)
    {
        var result = "";
        var firstCh = str[0];
        var lastCh = str[str.length - 1];
        if ((firstCh == '[') && (lastCh == ']'))
        {
            // remove quotes
            result = str.replace(/["']/g, "");
        }
        return result;
    },

    decodeQueryParamString: function(str)
    {
        var result = "";
        var firstCh = str[0];
        var lastCh = str[str.length - 1];
        if ((firstCh == '[') && (lastCh == ']'))
        {
            // add quotes
            result = str.replace(/[^\d,\[\]"'-]\w*#*/g, function(match) {return '"' + match + '"'});
        }
        return result;
    },

    onNewItemButton: function(event)
    {
        that = event.data.that;
        that.createNewItem();
    },

    init: function()
    {
        this.$addNewItemBtn = $('#' + ADD_NEW_ITEM_BTN_ID);
        this.$addNewItemBtn.click({that: this}, this.onNewItemButton);
        var itemsSerializedStates = this.readItemsQueryParams();
        if (itemsSerializedStates.length == 0)
        {
            this.createNewItem();
        }
        else
        {
            this.createItemsFromQueryParams(itemsSerializedStates);
        }
    }
}
