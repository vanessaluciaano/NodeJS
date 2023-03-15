const matematica = {
    soma: function(a, b) { return a+b; },

    subtracao: function(a, b) { return a-b; },

    divisao: function(a, b) { return a/b; },

    multiplicacao: function(a, b) { return a*b; },

    media: function(a, b, c) { return (a+b+c)/3; },

    area: function(l, a) { return l*a; },

    perimetroQ: function(b, h) { return 2*b + 2*h; }
}

module.exports = matematica