<template>
    <main>
        <div class="container">
            <p>Welcome to Real Cats! You have to login to view.</p>
            <nuxt-link to="/login">Sign In</nuxt-link>
        </div>
    </main>
</template>
<style lang="scss" scoped>
    .container {
        margin-top: 5rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 2rem;
    }

    p {
        font-size: 1.5rem;
        font-weight: 500;
        color: #003c95;
    }

    a {
        margin-top: 2rem;
        font-size: 1.2rem;
        font-weight: 500;
        color: #fff;
        background-color: #003c95;
        padding: 1.25rem 3rem;
        text-decoration: none;

    }

    @media only screen and (max-width: 768px) {
        p {
            font-size: 1rem;
        }
        a {
            font-size: 1rem;
            padding: 1rem 2rem;
        }
    }
    
</style>