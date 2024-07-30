class BSlider {
    constructor() {
        this.startX = 0;
        this.distanceX = 0;
        this.boxIdx = 0;
        this.isMove = false;
    }

    setOption(option) {
        this.backSwiper = option.sliderIoC;
        this.tags = [...option.sliderTagIoC.children];
        this.boxs = option.sliderIoC.children;
        this.pageWidth = option.sliderIoC.children[0].offsetWidth + option.spacing;
        this.proportion = option.proportion;
        return this;
    }

    init() {
        this.bindEvent();
    }

    bindEvent() {
        this.backSwiper.addEventListener('touchstart', this.handlerTouchStart.bind(this), false);
        this.backSwiper.addEventListener('touchmove', this.handlerTouchMove.bind(this), false);
        this.backSwiper.addEventListener('touchend', this.handlerTouchEnd.bind(this), false);
    }

    handlerTouchStart(e) {
        this.startX = e.touches[0].clientX;
    }

    handlerTouchMove(e) {
        const moveX = e.touches[0].clientX;
        if ((moveX > this.startX && this.boxIdx === 0) || (moveX < this.startX && this.boxIdx === this.boxs.length - 1)) {
            return;
        }
        this.distanceX = moveX - this.startX;
        this.setTranslateX(- this.pageWidth * this.boxIdx + this.distanceX);
        this.isMove = true;
    }

    handlerTouchEnd() {
        if (this.isMove) {
            if (Math.abs(this.distanceX) >= this.pageWidth / this.proportion) {
                if (this.distanceX > 0) {
                    this.boxIdx--;
                }
                if (this.distanceX < 0) {
                    this.boxIdx++;
                }
            }
            this.setTranslateX(-this.boxIdx * this.pageWidth);
            this.tags.forEach(tag => tag.className = '');
            this.tags[this.boxIdx].className = "active";
        }

        this.startX = 0;
        this.isMove = false;
        this.distanceX = 0;
    }

    setTranslateX(transX) {
        this.backSwiper.style.transition = 'all .1s';
        this.backSwiper.style.transform = `translateX(${transX}px)`
    }
}

const bSlider = new BSlider();
