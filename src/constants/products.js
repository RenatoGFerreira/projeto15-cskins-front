const products = [
    {
        _id: 1,
        product: "Desert Eagle | Blaze",
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgposr-kLAtl7PLJTjtO7dGzh7-HnvD8J_XVkjoFuMYiiLqUrI-k3le3r0s5amj7d9eTI1I-M1rW-Fm_xO-50Jfvot2XnhS4_w8U/110x110",
        price: 530,
        quality: "Factory New"

    },
    {
        _id: 2,
        product: "★ M9 Bayonet | Fade",
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf3qr3czxb49KzgL-KlsjyMr_UqWdY781lxL-Xpd6ijge1_EVvMmGhJNedew43ZA7TqAXqxOvrjZPovpydwSYw7nE8pSGKgyjY_DU/110x110",
        price: 1000,
        quality: "Factory New"

    },
    {
        _id: 3,
        product: "Sport Gloves (★) | Vice",
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DAQ1JmMR1osbaqPQJz7ODYfi9W9eO0mJWOqOf9PbDunm5Q_tw_07zA942m3AWwqktvMDigJNfGJAQ7MFDYqVK3lbru1MW07cybzicy7z5iuyiQn2mw2g",
        price: 730,
        quality: "Battle-scarred"

    },
    {
        _id:4,
        product: "AK-47 | Fire Serpent",
        image: "ttphs://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot7HxfDhjxszOeC9H_9mkhIWFg8j1OO-GqWlD6dN-teTE8YXghRrkqRVqMGzzIYeTIAVqaQuErlbvlb-80JfuusvJmHFr6SRxsXzfm0fkn1gSOc02RC4r",
        price: 800,
        quality: "Well-Worn"

    },
    {
        _id:5,
        product: "AWP | Asiimov",
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot621FAR17PLfYQJD_9W7m5a0n_L1JaKfzzoGuJJ02e2W8d6m2gztrkRoZmigItDGcgA_N1iFqwC-xr_m1J-57YOJlyVerprbwA",
        price: 56,
        quality: "Battle-scarred"

    },
    {
        _id:6,
        product: "M4A1-S | Blue Phosphor",
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpou-6kejhz2v_Nfz5H_uO3mb-Gw_alIITTmn5U-8h-gez--YXygED6-UM_YGCgcICcdw45Mg6Frle3yLju0Jfp7s_JzCRn7nMl5nqInxPjhwYMMLKt66Sutg",
        price: 200,
        quality: "Factory new"

    },
    {
        _id: 7,
        product: "M9 Bayonet (★)  | Tiger Tooth",
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfwJW5duzhr-Ehfb6NL7ummJW4NE_3bGR84qmiQHsr0NtMm7wcILBdVI5ZF2BrgPqkr_rg5K0v8nIyiQy7D5iuyj6nUSP2A",
        price: 450,
        quality: "Factory new"

    },
    {
        _id:8,
        product: "M9 Bayonet (★) | Slaughter",
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpotLu8JAllx8zJfAJY6d6klb-GkvP9Jrafxz1S7cNz2e-WodqtjlHmqkVlYGryLIOTIQ5vN13U_ADsk7y8jJTu6IOJlyWomZcOGQ",
        price: 350,
        quality: "Field-tested"

    },
    {
        _id:9,
        product: "USP-S | Printstream",
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpoo6m1FBRp3_bGcjhQ09-jq5WYh8jkIbLfgnhF-sBwh9bN_Iv9nBrtrUY-MD33co-RJlQ9NVHW_wO9k-y6gsW_7cyanHZkunUr4XnbnB23n1gSOU78gfTH",
        price: 165,
        quality: "Factory new"
    },
    {
        _id:10,
        product: "Hand Wraps (★) | Cobalt Skulls",
        image: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DfVlxgLQFFibKkJQN3wfLYYgJK7dKyg5KKh8j4NrrFnm5D8fp3i-vT_I_KilihriwvOCyveMX6L1NqOB2N5FPqlerohpC7upjJn3FrunZz53beyhe01xFPZuU-hqfNGAidAvEbTqacRi2HoZMa1UI",
        price: 350,
        quality: "Well-worn"

    }
]

export default products