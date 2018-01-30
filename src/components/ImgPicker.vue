<template>
    <section id="imagePicker">
        <div class="plus-sign-wrapper">
            <img src="/src/assets/images/add-icon.png" alt="Add image">
        </div>
        <p class="caption">
            Add your Picture
        </p>
    </section>
</template>

<script>
    export default {
        name: 'imagePicker',
        data () {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/style/main.scss';

    #imagePicker {
        @extend %gallery-element-shadow;
        width: 235px;
        height: 200px;
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .plus-sign-wrapper {
            width: 45px;
            height: 45px;
            background-color: $blue;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            & img {
                width: 20px;
                height: 20px;
            }
        }

        .caption {
            width: 100px;
            text-align: center;
        }
    }
</style>
