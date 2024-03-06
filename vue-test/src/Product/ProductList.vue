<template>
    <div>
        <div v-for="product in products.data" :key="product.id">
            <h2>{{ product.name }}</h2>
            <p>Price: ${{ product.price }}</p>
            <p v-if="product.reviews.length > 0">Average Rating: {{ calculateAverageRating(product.reviews) }}</p>
            <hr>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            products: {
                status: "success",
                data: [
                    {
                        id: 1,
                        name: "Product 1",
                        description: "Description for Product 1",
                        price: 99.99,
                        category: {
                            id: 1,
                            name: "Electronics"

                        },
                        images: ["image1.jpg", "image2.jpg"],
                        reviews: [
                            {
                                id: 1,
                                rating: 4,
                                comment: "Great product!",
                                author: "John Doe"

                            },
                            {
                                id: 2,
                                rating: 5,
                                comment: "Great product!",
                                author: "John Doe"

                            },
                            {
                                id: 3,
                                rating: 6,
                                comment: "Great product!",
                                author: "John Doe"

                            },
                            // 更多评论...
                        ]

                    },
                    {
                        id: 2,
                        name: "Product 2",
                        description: "Description for Product 1",
                        price: 99.99,
                        category: {
                            id: 1,
                            name: "Electronics"

                        },
                        images: ["image1.jpg", "image2.jpg"],
                        reviews: [
                            {
                                id: 1,
                                rating: 4,
                                comment: "Great product!",
                                author: "John Doe"

                            },
                            {
                                id: 2,
                                rating: 9,
                                comment: "Great product!",
                                author: "John Doe"

                            },
                            {
                                id: 3,
                                rating: 6,
                                comment: "Great product!",
                                author: "John Doe"

                            },
                            // 更多评论...
                        ]

                    },
                    // 更多商品...
                ]
            }

        };
    },
    methods: {
        calculateAverageRating(reviews) {
            if (reviews.length === 0) return 0;
            const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
            return (totalRating / reviews.length).toFixed(1);//保留一位小数
        }
    }
}
</script>
  