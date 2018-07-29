
    /**
     * 金额格式化、四舍五入并实现千位分隔：
     *  123456.904 -> 123,456.90
     *  123456.905 -> 123,456.91
     *  123,456.90 -> 123,456.90
     *  123456.909 -> 123,456.91
     *  13,456.909 -> 13,456.91
     *  1234       -> 1,234.00
     *  123        -> 123.00
     *  123.       -> 123.00
     *  123.0      -> 123.00
     *  ''         -> 0.00
     *  'str'      -> 0.00
     *  null       -> 0.00
     *  undefined  -> 0.00
     * @param money 待格式化的金额
     */
    function formatDecimal(money) {
        if (!money || !parseFloat(money)) return '0.00';
        if (money.toString().includes(',')) return money;
        money = parseFloat(money).toFixed(2).toString();
        return money.replace(/\B\d{3}/g, ',$&');
    }