# Meta Tag

## 1 Nuxt Config
- Apply all
```
    app: {
        head: {
        title: 'Nuxt App',
        meta: [
            { name: 'description', content: 'Everything about Nuxt 3 App' },
        ],

        link: [
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        ],
        },
    },
```

## 2 Each Page add Custom Meta Tag
```
useHead({
    title: 'Nuxt App | Product',
    meta: [
        { name: 'description', content: 'Nuxt 3 Product' }
    ]
})
```

## 3 Built In Component