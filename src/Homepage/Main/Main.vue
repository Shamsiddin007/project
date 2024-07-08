<template>
    <div class="page-main">
        <h1 class="main-h1">Let's do it together.</h1>
        <p class="main-p">We travel the world in search of stories. Come along for the ride.</p>
        <button class="main-btn">View Latest Posts</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .page-main{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding-top: 200px;
    }
    .main-h1{
        font-size: 60px;
        color: #FFFFFF;
        margin-bottom: 10px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    }
    .main-p{
        color: #FFFFFF;
        margin-bottom: 15px;
        opacity: 50%;
        font-size: 20px;
    }
    .main-btn{
        cursor: pointer;
        padding: 13px 15px;
        border-radius: 4px;
        border: 0;
        background-color: #DD783F;
        color: #FFFFFF;  
    }
    .main-btn:active{
        transform: scale(1.1);
    }
    @media (max-width:557px) {
        .main-h1{
            font-size: 40px;
        }
        .main-p[data-v-57f6e7ee]{
            font-size: 15px;
        }
        .main-btn[data-v-57f6e7ee]{
            padding: 8px 10px;
        }
    }
    @media (max-width:529px) {
        .main-p[data-v-20187a4b]{
            text-align: center;
        }
    }
</style>