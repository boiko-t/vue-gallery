<template>
    <div>
        <section id="imagePicker">
            <label class="plus-sign-wrapper">
                <img src="/src/assets/images/add-icon.png" alt="Add image">
                <input type="file" @change="onFileSelected">
            </label>
            <p class="caption">
                Add your Picture
            </p>
        </section>
    </div>
</template>

<script>
    export default {
        name: 'imagePicker',
        data () {
            return {
            }
        },
        methods: {
            onFileSelected(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length)
                    return;
                this.createImage(files[0]);
            },
            createImage(file) {
                let image = new Image();
                let reader = new FileReader();

                reader.onload = (e) => {
                    image = e.target.result;
                    this.$store.commit('addImage', image);
                };
                reader.readAsDataURL(file);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/style/main.scss';

    #imagePicker {
        @extend %gallery-element-style;
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
            margin: 20px 0 10px;
            display: flex;
            justify-content: center;
            align-items: center;

            input {
                display: none;
            }

            img {
                width: 20px;
                height: 20px;
            }
        }

        .caption {
            font: 600 14px OpenSans;
            color: $light-gray;
            width: 100px;
            text-align: center;
        }
    }
</style>
