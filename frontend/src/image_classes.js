export const IMAGENET_CLASSES = {
    0: 'Apple pie',
    1: 'Baby back ribs',
    2: 'Baklava',
    3: 'Beef carpaccio',
    4: 'Beef tartare',
    5: 'Beet salad',
    6: 'Beignets',
    7: 'Bibimbap',
    8: 'Bread pudding',
    9: 'Breakfast burrito',
    10: 'Bruschetta',
    11: 'Caesar salad',
    12: 'Cannoli',
    13: 'Caprese salad',
    14: 'Carrot cake',
    15: 'Ceviche',
    16: 'Cheesecake',
    17: 'Cheese plate',
    18: 'Chicken curry',
    19: 'Chicken quesadilla',
    20: 'Chicken wings',
    21: 'Chocolate cake',
    22: 'Chocolate mousse',
    23: 'Churros',
    24: 'Clam chowder',
    25: 'Club sandwich',
    26: 'Crab cakes',
    27: 'Creme brulee',
    28: 'Croque madame',
    29: 'Cup cakes',
    30: 'Deviled eggs',
    31: 'Donuts',
    32: 'Dumplings',
    33: 'Edamame',
    34: 'Eggs benedict',
    35: 'Escargots',
    36: 'Falafel',
    37: 'Filet mignon',
    38: 'Fish and chips',
    39: 'Foie gras',
    40: 'French fries',
    41: 'French onion soup',
    42: 'French toast',
    43: 'Fried calamari',
    44: 'Fried rice',
    45: 'Frozen yogurt',
    46: 'Garlic bread',
    47: 'Gnocchi',
    48: 'Greek salad',
    49: 'Grilled cheese sandwich',
    50: 'Grilled salmon',
    51: 'Guacamole',
    52: 'Gyoza',
    53: 'Hamburger',
    54: 'Hot and sour soup',
    55: 'Hot dog',
    56: 'Huevos rancheros',
    57: 'Hummus',
    58: 'Ice cream',
    59: 'Lasagna',
    60: 'Lobster bisque',
    61: 'Lobster roll sandwich',
    62: 'Macaroni and cheese',
    63: 'Macarons',
    64: 'Miso soup',
    65: 'Mussels',
    66: 'Nachos',
    67: 'Omelette',
    68: 'Onion rings',
    69: 'Oysters',
    70: 'Pad thai',
    71: 'Paella',
    72: 'Pancakes',
    73: 'Panna cotta',
    74: 'Peking duck',
    75: 'Pho',
    76: 'Pizza',
    77: 'Pork chop',
    78: 'Poutine',
    79: 'Prime rib',
    80: 'Pulled pork sandwich',
    81: 'Ramen',
    82: 'Ravioli',
    83: 'Red velvet cake',
    84: 'Risotto',
    85: 'Samosa',
    86: 'Sashimi',
    87: 'Scallops',
    88: 'Seaweed salad',
    89: 'Shrimp and grits',
    90: 'Spaghetti bolognese',
    91: 'Spaghetti carbonara',
    92: 'Spring rolls',
    93: 'Steak',
    94: 'Strawberry shortcake',
    95: 'Sushi',
    96: 'Tacos',
    97: 'Takoyaki',
    98: 'Tiramisu',
    99: 'Tuna tartare',
    100: 'Waffles'
};

export const getIndex = (classname) => {
    for (let key in IMAGENET_CLASSES) {
        if (IMAGENET_CLASSES[key] === classname) {
            return parseInt(key);
        }
    }
}
