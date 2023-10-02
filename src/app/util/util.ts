export function getCookie(key: string) {
    var b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
    return b ? b.pop() : "";
}

export function currencyFormat(price: number) {
    return `${(price / 100).toFixed(2)}`
}

export function delivery(price: number) {
    switch (price > 0) {
        case (price < 50000): {
            return 3000;
        }
        case (price < 100000): {
            return 1000;
        }
        case (price >= 100000): {
            return 0;
        }
        default: {
            return 0;
        }
    }
}