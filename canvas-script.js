function start() {
    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('header-canvas')
    const ctx = canvas.getContext('2d')

    const color1 = '#ff3a3a'
    const color2 = '#a6a6ff'

    /**
     * @typedef {{
     *    width: number,
     *    x: number,
     *    y: number,
     *    color: string,
     *    direction: number,
     *    directionChange: number,
     *    directionChangeChange: number,
     *    splitLast: number,
     * }} Line
     */

    /** @type {Line[]} */
    let lines = []

    let dpr = 1, w = 0, h = 0, diag = 0, sizeFactor = 1

    function init() {
        lines = [
            {
                width: 24,
                x: w,
                y: h,
                color: color2,
                direction: -2.5,
                directionChange: 0.015,
                directionChangeChange: -0.00007,
                splitLast: 0,
            },
            {
                width: 20,
                x: 0,
                y: 0,
                color: color1,
                direction: 0.25,
                directionChange: 0.015,
                directionChangeChange: -0.00005,
                splitLast: 0,
            }
        ]
    }

    function setSizes() {
        dpr = devicePixelRatio
        const size = canvas.getBoundingClientRect()
        if (size.width === w && size.height === h) return
        w = size.width
        h = size.height
        diag = Math.sqrt(w * w + h * h)
        sizeFactor = 0.1 + diag / 1400

        canvas.width = Math.round(w * dpr)
        canvas.height = Math.round(h * dpr)
        ctx.lineCap = 'round'
        init()
    }

    setSizes()
    window.addEventListener('resize', setSizes)

    function render() {
        const shouldRemove = []

        for (const i in lines) {
            ctx.beginPath()

            const line = lines[i]
            ctx.lineWidth = line.width * dpr
            ctx.strokeStyle = line.color

            const newX = line.x + Math.sin(line.direction) * sizeFactor
            const newY = line.y + Math.cos(line.direction) * sizeFactor
            ctx.moveTo(line.x * dpr, line.y * dpr)
            ctx.lineTo(newX * dpr, newY * dpr)
            line.x = newX
            line.y = newY

            line.width *= 0.993
            line.direction += line.directionChange
            line.directionChange += line.directionChangeChange

            line.splitLast += 1
            if (line.splitLast > 40 && Math.random() < 0.07) {
                line.splitLast = 0
                lines.push({
                    ...line,
                    directionChange: -line.directionChange,
                    width: line.width * (0.9 + Math.random() * 0.04),
                })
            }

            if (line.width < 0.2) {
                shouldRemove.push(i)
            }

            ctx.stroke()
        }

        if (shouldRemove.length > 0) {
            const indices = []
            for (const i of shouldRemove) {
                indices[i] = true
            }

            lines = lines.filter((_, i) => !indices[i])
        }

        requestAnimationFrame(render)
    }

    requestAnimationFrame(render)
}

start()
