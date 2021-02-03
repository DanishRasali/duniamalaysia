<template>
    <div>
        <div class="w-full">
            <img id="cta" :src="$page.props.app.url + '/images/nasi_lemak.png'" />

            <svg viewBox="0 0 215 110">
                <polygon class="polymorph" points="215,110 0,110 0,0 49.3,0 215,0" />
            </svg>

            <div id="ntext">
                <p class="text-8xl italic">Nasi Lemak!</p>
            </div>

            <div id="blip">
                <h1 class="text-3xl underline italic mb-4">Nasi Lemak</h1>
                <p class="text-xl italic">
                    A dish originating in Malay cuisine that consists of fragrant rice cooked in coconut milk and pandan leaf. It is commonly found in Malaysia, where it is considered the national dish.
                    It is also the native dish in neighbouring areas with significant Malay populations such as Singapore, Brunei, and Southern Thailand. In Indonesia it can be found in several parts of Sumatra;
                    especially the Malay regions of Riau, Riau Islands and Medan. Nasi lemak can also be found in the Bangsamoro region of Mindanao, prepared by Filipino Moros, as well as Australia's external 
                    territories of Christmas Island and the Cocos (Keeling) Islands. It is considered one of the most famous dishes for a Malay-style breakfast.
                </p>
                <button id="cta2" class="italic">Yummy!</button>
            </div>
        </div>

        <div class="w-full">
            <p class="text-8xl italic">Nasi Lekkkmak!</p>
            <p class="text-8xl italic">Nasi Lekkkmak!</p>
            <p class="text-8xl italic">Nasi Lemkkkak!</p>
            <p class="text-8xl italic">Nasi Lemakkkk!</p>
            <p class="text-8xl italic">Nasi Lemkkkak!</p>
        </div>
    </div>
</template>

<script>
    import anime from 'animejs/lib/anime.es.js'

    export default {
        mounted() {

            anime({
                targets: '#ntext',
                opacity: 1,
                duration: 3000,
                translateX: 800
            });

            var btn = document.getElementById('cta');
            var btn2 = document.getElementById('cta2');

            btn.onclick = function () {
                var morphing = anime({
                    targets: '.polymorph',
                    points: [
                        { value: '215, 110 0, 110 0, 0 47.7, 0 67, 76' },
                        { value: '215, 110 0, 110 0, 0 0, 0 67, 76' }
                    ],
                    easing: 'easeOutQuad',
                    duration: 1200,
                    loop: false
                });

                anime({
                    targets: '#blip',
                    opacity: 1,
                    duration: 3000,
                    translateY: 150
                });

                var promise = morphing.finished.then(() => {
                    btn2.onclick = function () {
                        var morphing = anime({
                            targets: '.polymorph',
                            points: [
                                { value: '215, 110 0, 110 0, 0 47.7, 0 67, 76' },
                                { value: '215,110 0,110 0,0 49.3,0 215,0' }
                            ],
                            easing: 'easeOutQuad',
                            duration: 1200,
                            loop: false
                        });
                        anime({
                            targets: '#blip',
                            opacity: 0,
                            duration: 3000,
                            translateY: -800
                        });
                    };
                });
            }
        }
    }
</script>

<style>
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: "Montserrat";
}

.polymorph {
  fill: #398f5a;
}

#cta{
    position: absolute;
    margin: 15em 10em 0;
    left: 0;
    right: 0;
    width: 20%;
    background: none;
    border-radius: 15px;
    padding: 15px;
    font-size: 1.5em;
    cursor: pointer;
    outline: 0;
    animation: shadow-pulse 1s infinite;
    cursor:pointer;
}

@keyframes shadow-pulse
{
     0% {
          box-shadow: 0 0 0 0px rgba(255, 255, 255, 0.2);
     }
     100% {
          box-shadow: 0 0 0 35px rgba(255, 255, 255, 0);
     }
}

#cta2{
    position: absolute;
    margin: 15em 10em 0;
    left: 0;
    right: 0;
    width: 20%;
    background: none;
    border: 2px dashed #e7e3d8;
    border-radius: 15px;
    padding: 15px;
    color: #e7e3d8;
    font-size: 1.5em;
    cursor: pointer;
    outline: 0;
}

#cta2{
    width: auto;
    margin: 30px auto;
    background: #398f5a;
}

#ntext{
    position: absolute;
    color: #e7e3d8;
    left:  0;
    top: 15%;
    opacity: 0;
    width: 45%;
    transform: translateX(-500px);
}

#blip{
    position: absolute;
    color: #398f5a;
    right:  15%;
    top: 0%;
    opacity: 0;
    width: 45%;
    transform: translateY(-800px);
}
</style>