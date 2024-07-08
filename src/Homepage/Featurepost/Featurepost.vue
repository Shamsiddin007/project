<template>
    <div class="feature">
        <h1 class="feature-h1">Featured Posts</h1>
        <div class="feature-img">
            <section class="feature-section">
                <img class="img" src="/src/assets/mountainblur.png" alt="">
                <div class="feature-position">
                    <h1>The Road Ahead</h1>
                    <p style="opacity: 50%;">The road ahead might be paved - it might not be.</p>
                    <div style="display: flex; align-items: end; justify-content: space-between;">
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <img src="/src/assets/Mat.png" alt="">
                            <p>Mat Vogels</p>
                        </div>
                        <p>September 25, 2015</p>
                    </div>
                </div>
            </section>
            <section>
                <img class="img" src="/src//assets/child.png" alt="">
                <div class="feature-position2">
                    <button class="feature-position-btn">Adventure</button>
                    <h1>From Top Down</h1>
                    <p style="opacity: 50%;">Once a year, go someplace you’ve never been before.</p>
                    <div style="display: flex; align-items: end; justify-content: space-between;">
                        <div style="display: flex; gap: 10px; align-items: center;">
                            <img src="/src/assets/wong.png" alt="">
                            <p>William Wong</p>
                        </div>
                        <p>September 25, 2015</p>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .feature{
        display: flex;
        flex-direction: column;
        align-items: center;
        padding-top: 30px;
    }
    .feature-h1{
        padding: 20px 0 0;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 1px solid black;
    }
    .feature-img{
        widows: 100%;
        display: grid;
         grid-template-columns: repeat(2, 1fr);
        /* display: flex; */
        gap: 40px;
        margin-bottom: 0;
    }
    .feature-position{
        color: #FFFFFF;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: relative;
        bottom: 120px;
        padding: 0 20px;
        line-height: 30px;
    }
    .feature-position2{
        color: #FFFFFF;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        position: relative;
        bottom: 120px;
        padding: 0 20px;
        line-height: 30px;
    }
    .feature-position-btn{
        position: absolute;
        bottom: 200px;
        background-color: #DD783F;
        border: 0;
        padding: 4px 10px;
        color: #FFFFFF;
        border-radius: 4px;
        font-size: 15px;
    }
    .feature-position-btn:active{
        transform: scale(1.1);
    }
    .img{
        width: 460px;
        height: 280px;
    }

    @media (max-width:1010px) {
        .feature-img[data-v-c6377c64]{
            display: block;
        }
        .img[data-v-4fecd385]{
            width: 400px;
        }
    }
</style>