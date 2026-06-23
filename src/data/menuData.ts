export interface MenuItem {
  id: number;
  name_ar: string;
  name_en: string;
  description_ar: string;
  price: number;
  calories: number;
  rating: number;
  image: string; // ايموجي أو مسار الصورة
  category: 'coffee' | 'pastries' | 'drinks';
}

export const menuItems: MenuItem[] = [
  // ==================== ☕ قسم القهوة المختصة (Coffee) ====================
  {
    id: 1,
    name_ar: "سبانيش لاتيه حار",
    name_en: "Hot Spanish Latte",
    description_ar: "مزج غني من إسبريسو البن الفاخر مع الحليب المكثف والمبخر اللذيذ.",
    price: 22,
    calories: 180,
    rating: 4.9,
    image: "☕",
    category: "coffee"
  },
  {
    id: 2,
    name_ar: "إسبريسو سينجل",
    name_en: "Single Espresso",
    description_ar: "جرعة مركزة من أجود أنواع البن الإثيوبي الفاخر المستخلص بعناية.",
    price: 12,
    calories: 5,
    rating: 4.7,
    image: "☕",
    category: "coffee"
  },
  {
    id: 3,
    name_ar: "أمريكانو حار",
    name_en: "Hot Americano",
    description_ar: "جرعة مزدوجة من الإسبريسو الغني مع الماء الساخن للحصول على نكهة متوازنة وعميقة.",
    price: 15,
    calories: 10,
    rating: 4.6,
    image: "☕",
    category: "coffee"
  },
  {
    id: 4,
    name_ar: "كورتادو الملكي",
    name_en: "Royal Cortado",
    description_ar: "كميات متساوية من الإسبريسو الغني والحليب المبخر بقوام مخملي ناعم.",
    price: 18,
    calories: 60,
    rating: 4.8,
    image: "☕",
    category: "coffee"
  },
  {
    id: 5,
    name_ar: "فلات وايت",
    name_en: "Flat White",
    description_ar: "جرعة مزدوجة من ريستريتو الإسبريسو مع طبقة رقيقة من الحليب الساخن والمبخر ميكرو-فوم.",
    price: 19,
    calories: 120,
    rating: 4.9,
    image: "☕",
    category: "coffee"
  },
  {
    id: 6,
    name_ar: "كابتشينو كلاسيك",
    name_en: "Classic Cappuccino",
    description_ar: "مزيج تقليدي متوازن من الإسبريسو والحليب المبخر مغطى بطبقة غنية وكثيفة من الرغوة.",
    price: 19,
    calories: 130,
    rating: 4.7,
    image: "☕",
    category: "coffee"
  },
  {
    id: 7,
    name_ar: "كافيه لاتيه فرنسي",
    name_en: "French Cafe Latte",
    description_ar: "إسبريسو غني ممزوج ببراعة مع الحليب الساخن ومغطى بطبقة خفيفة من الرغوة الناعمة.",
    price: 20,
    calories: 150,
    rating: 4.8,
    image: "☕",
    category: "coffee"
  },
  {
    id: 8,
    name_ar: "ميكاتو إيطالي",
    name_en: "Italian Macchiato",
    description_ar: "جرعة إسبريسو مركزة ومُعلمة بلمسة لطيفة من رغوة الحليب المبخر.",
    price: 14,
    calories: 15,
    rating: 4.5,
    image: "☕",
    category: "coffee"
  },
  {
    id: 9,
    name_ar: "v60 مقطرة حارة",
    name_en: "Hot V60 Coffee",
    description_ar: "قهوة سوداء صافية محضرة بالتقطير اليدوي من اختيارك من المحاصيل السنوية المتميزة.",
    price: 24,
    calories: 4,
    rating: 4.9,
    image: "☕",
    category: "coffee"
  },
  {
    id: 10,
    name_ar: "قهوة كيمكس المختصة",
    name_en: "Chemex Specialty",
    description_ar: "مستخلصة بفلاتر سميكة تبرز حلاوة وإيحاءات البن بدقة ونقاوة عالية جداً.",
    price: 26,
    calories: 4,
    rating: 4.9,
    image: "☕",
    category: "coffee"
  },

  // ==================== 🍰 قسم الحلويات والمخبوزات (Pastries) ====================
  {
    id: 11,
    name_ar: "كروواسان اللوز الفريد",
    name_en: "Almond Croissant",
    description_ar: "مخبوز فرنسي هش غني بالزبدة ومحشو ومغطى بكريمة اللوز ورقائق اللوز المقرمشة.",
    price: 18,
    calories: 290,
    rating: 4.8,
    image: "🥐",
    category: "pastries"
  },
  {
    id: 12,
    name_ar: "كروواسان السيراميك سادة",
    name_en: "Plain Croissant",
    description_ar: "كرواسان مخبوز يومياً بطبقات مقرمشة هشة على الطريقة الفرنسية التقليدية.",
    price: 12,
    calories: 210,
    rating: 4.6,
    image: "🥐",
    category: "pastries"
  },
  {
    id: 13,
    name_ar: "كعكة العسل الروسية",
    name_en: "Russian Honey Cake",
    description_ar: "طبقات رقيقة وهشة من الكيك المحضر بالعسل الطبيعي تفصل بينها كريمة مخفوقة خفيفة.",
    price: 28,
    calories: 420,
    rating: 4.9,
    image: "🍰",
    category: "pastries"
  },
  {
    id: 14,
    name_ar: "تشيز كيك سان سيباستيان",
    name_en: "San Sebastian Cheesecake",
    description_ar: "التشيزكيك المحروق الشهير بقوامه الكريمي الذائب من الداخل، يقدم مع صوص الشوكولاتة البلجيكية الحارة.",
    price: 32,
    calories: 510,
    rating: 4.9,
    image: "🍰",
    category: "pastries"
  },
  {
    id: 15,
    name_ar: "تارت البكان والكراميل",
    name_en: "Pecan Caramel Tart",
    description_ar: "عجينة تارت مقرمشة محشوة بقطع جوز البكان الفاخر ومغطاة بصلصة الكراميل الغنية المملحة.",
    price: 24,
    calories: 380,
    rating: 4.7,
    image: "🥧",
    category: "pastries"
  },
  {
    id: 16,
    name_ar: "براونيز الشوكولاتة الداكنة",
    name_en: "Fudge Chocolate Brownie",
    description_ar: "قطع البراونيز الغنية والمخبوزة بقطع الشوكولاتة البلجيكية الداكنة المقرمشة.",
    price: 16,
    calories: 340,
    rating: 4.8,
    image: "🍫",
    category: "pastries"
  },
  {
    id: 17,
    name_ar: "كيكة التيراميسو الإيطالية",
    name_en: "Classic Tiramisu",
    description_ar: "بسكويت ليدي فينجر مغموس بإسبريسو المقهى مع طبقات من جبنة الماسكاربوني الفاخرة وبودرة الكاكاو.",
    price: 29,
    calories: 390,
    rating: 4.9,
    image: "🍰",
    category: "pastries"
  },
  {
    id: 18,
    name_ar: "كوكيز الشوكولاتة العملاق",
    name_en: "Giant Chocolate Cookies",
    description_ar: "كوكيز طري ومقرمش من الأطراف، مليء بقطع الشوكولاتة الذائبة ويقدم دافئاً.",
    price: 14,
    calories: 280,
    rating: 4.7,
    image: "🍪",
    category: "pastries"
  },
  {
    id: 19,
    name_ar: "كيكة الزعفران والتروبيكال",
    name_en: "Saffron Milk Cake",
    description_ar: "كيكة الحليب الطرية والمنقوعة بصلصة الزعفران الإيراني الفاخر مغطاة بالكريمة المخفوقة.",
    price: 27,
    calories: 440,
    rating: 4.8,
    image: "🍰",
    category: "pastries"
  },
  {
    id: 20,
    name_ar: "دونات الفستق الحلبي",
    name_en: "Pistachio Donut",
    description_ar: "دونات هشة وخفيفة محشوة ومغطاة بكريمة زبدة الفستق الحلبي الطبيعي 100%.",
    price: 15,
    calories: 310,
    rating: 4.6,
    image: "🍩",
    category: "pastries"
  },

  // ==================== 🍹 قسم المشروبات الباردة والمنعشة (Drinks) ====================
  {
    id: 21,
    name_ar: "v60 كولومبي مثلج",
    name_en: "Iced V60 Colombian",
    description_ar: "قهوة مقطرة باردة ومحضرة من محاصيل كولومبية فاخرة ذات إيحاءات فاكهية واضحة.",
    price: 26,
    calories: 5,
    rating: 4.9,
    image: "🍹",
    category: "drinks"
  },
  {
    id: 22,
    name_ar: "سبانيش لاتيه مثلج",
    name_en: "Iced Spanish Latte",
    description_ar: "جرعة إسبريسو مزدوجة تُسكب فوق الحليب البارد المحلى والمثلج لإنعاش فوري.",
    price: 24,
    calories: 220,
    rating: 4.9,
    image: "🍹",
    category: "drinks"
  },
  {
    id: 23,
    name_ar: "آيس أمريكانو كلاسيك",
    name_en: "Iced Americano",
    description_ar: "إسبريسو المقهى الفاخر ممزوج بالماء البارد ومكعبات الثلج لنكهة قوية ومنعشة.",
    price: 17,
    calories: 10,
    rating: 4.7,
    image: "🍹",
    category: "drinks"
  },
  {
    id: 24,
    name_ar: "آيس وايت موكا الكريمة",
    name_en: "Iced White Mocha",
    description_ar: "مزيج متناغم من الشوكولاتة البيضاء الفاخرة، الحليب البارد، والإسبريسو مع الثلج.",
    price: 25,
    calories: 360,
    rating: 4.8,
    image: "🍹",
    category: "drinks"
  },
  {
    id: 25,
    name_ar: "ماتشا لاتيه ياباني مثلج",
    name_en: "Iced Matcha Latte",
    description_ar: "بودرة الماتشا الاحتفالية العضوية والمستوردة من اليابان ممزوجة ببراعة مع الحليب البارد.",
    price: 26,
    calories: 140,
    rating: 4.9,
    image: "🍵",
    category: "drinks"
  },
  {
    id: 26,
    name_ar: "سيريس كولد برو",
    name_en: "Signature Cold Brew",
    description_ar: "قهوة مركزة ومستخلصة ببطء بالماء البارد لمدة 16 ساعة متواصلة لنكهة ناعمة خالية من المرارة.",
    price: 27,
    calories: 5,
    rating: 4.8,
    image: "🍹",
    category: "drinks"
  },
  {
    id: 27,
    name_ar: "موهيتو الفراولة والنعناع",
    name_en: "Strawberry Mint Mojito",
    description_ar: "مشروب غازي فوار ومنعش محضر من قطع الفراولة الطازجة، ليمون، ونعناع بلدي مركز.",
    price: 21,
    calories: 110,
    rating: 4.7,
    image: "🍹",
    category: "drinks"
  },
  {
    id: 28,
    name_ar: "موهيتو الأزرق الاستوائي",
    name_en: "Blue Ocean Mojito",
    description_ar: "مزيج منعش من نكهات التوت الأزرق، الليمون الحامض، وأوراق النعناع المنعشة مع الصودا.",
    price: 21,
    calories: 95,
    rating: 4.6,
    image: "🍹",
    category: "drinks"
  },
  {
    id: 29,
    name_ar: "آيسد تي خوخ منعش",
    name_en: "Peach Iced Tea",
    description_ar: "شاي أسود مخمر بارد وممزوج بعصارة الخوخ الطبيعية وشرائح الليمون الطازجة.",
    price: 19,
    calories: 80,
    rating: 4.8,
    image: "🍹",
    category: "drinks"
  },
  {
    id: 30,
    name_ar: "مياه معدنية فاخرة مُبردة",
    name_en: "Premium Sparkling Water",
    description_ar: "مياه معدنية غازية فوارة ومبردة مستوردة تقدم مع شريحة ليمون طازجة.",
    price: 10,
    calories: 0,
    rating: 4.5,
    image: "💧",
    category: "drinks"
  }
];
