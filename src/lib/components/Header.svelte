<script lang="ts">
  let canvas: HTMLCanvasElement
  let ctx = $state<CanvasRenderingContext2D>()
  let devicePixelRatio = $state(1)
  let width = $state(1)

  let start: number

  $effect(() => {
    ctx = canvas.getContext('2d')!
    start = Date.now()
    requestAnimationFrame(render)
  })

  $effect(() => {
    const size = width * devicePixelRatio
    canvas.width = canvas.height = size
  })

  function render() {
    if (canvas == null || ctx == null) {
      requestAnimationFrame(render)
      return
    }

    const delta = (Date.now() - start) / 800

    canvas.width = canvas.width
    ctx.lineWidth = devicePixelRatio

    const center = canvas.width / 2

    ctx.strokeStyle = '#0001'
    drawStarShapedCircle(ctx, center, center, center * 0.6, center * 0.65, 2, delta / 7)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = '#0002'
    drawStarShapedCircle(ctx, center, center, center * 0.65, center * 0.7, 3, delta / 6)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = '#0003'
    drawStarShapedCircle(ctx, center, center, center * 0.7, center * 0.75, 4, delta / 5)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = '#0004'
    drawStarShapedCircle(ctx, center, center, center * 0.75, center * 0.8, 6, delta / 4)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = '#0005'
    drawStarShapedCircle(ctx, center, center, center * 0.8, center * 0.85, 8, delta / 3)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = '#0006'
    drawStarShapedCircle(ctx, center, center, center * 0.85, center * 0.9, 10, delta / 2)
    ctx.stroke()
    ctx.beginPath()
    ctx.strokeStyle = '#0007'
    drawStarShapedCircle(ctx, center, center, center * 0.9, center * 0.95, 12, delta)
    ctx.stroke()

    requestAnimationFrame(render)
  }

  function drawStarShapedCircle(
    ctx: CanvasRenderingContext2D,
    centerX: number,
    centerY: number,
    radius1: number,
    radius2: number,
    parts: number,
    startAngle: number,
  ) {
    const segments = parts * 2
    const curves: number[][] = []
    for (let i = 0; i < segments; i++) {
      curves.push(getCurveApproxCircleSegment(startAngle + (i * Math.PI * 2) / segments, segments))
    }

    ctx.moveTo(curves[0][0] * radius1 + centerX, curves[0][1] * radius1 + centerY)

    let uneven = false
    for (const [p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y] of curves) {
      uneven = !uneven
      let r1: number, r2: number
      if (uneven) {
        r1 = radius1
        r2 = radius2
      } else {
        r1 = radius2
        r2 = radius1
      }

      ctx.bezierCurveTo(
        p2x * r1 + centerX,
        p2y * r1 + centerY,
        p3x * r2 + centerX,
        p3y * r2 + centerY,
        p4x * r2 + centerX,
        p4y * r2 + centerY,
      )
    }
  }

  function getCurveApproxCircleSegment(startAngle: number, segmentCount: number) {
    const angle = (Math.PI * 2) / segmentCount
    const endAngle = startAngle + angle

    const k = getCircleSegmentK(angle)

    const p1x = Math.cos(startAngle)
    const p1y = Math.sin(startAngle)

    const p4x = Math.cos(endAngle)
    const p4y = Math.sin(endAngle)

    const p2x = p1x - k * Math.sin(startAngle)
    const p2y = p1y + k * Math.cos(startAngle)

    const p3x = p4x + k * Math.sin(endAngle)
    const p3y = p4y - k * Math.cos(endAngle)

    return [p1x, p1y, p2x, p2y, p3x, p3y, p4x, p4y]
  }

  function getCircleSegmentK(angle: number) {
    return (Math.tan(angle / 4) * 4) / 3
  }
</script>

<svelte:window bind:devicePixelRatio />

<header>
  <h1>
    <div class="fancy-word">Web Design</div>
    <div class="header-sub">von Ludwig Stecher</div>
  </h1>
  <canvas id="animation-canvas" bind:this={canvas} bind:clientWidth={width}></canvas>
</header>

<style lang="scss">
  header {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: 100svh;
    background-color: white;
    background: linear-gradient(to bottom in oklab, white, rgb(226, 255, 214));
    z-index: 2;

    h1 {
      margin: 0;
      text-align: center;
    }

    .fancy-word {
      font-size: calc(1.6rem + 2.2vw);
      font-weight: 300;
      line-height: 1;
      color: #ce0037;
    }
    .header-sub {
      font-size: calc(0.8rem + 1.1vw);
      font-weight: 500;
      line-height: 1;
      margin-top: 1rem;
    }
  }

  #animation-canvas {
    position: absolute;
    left: 50%;
    top: 50%;
    width: min(90svh, 90vw);
    height: min(90svh, 90vw);
    margin-top: max(-45svh, -45vw);
    margin-left: max(-45svh, -45vw);
  }
</style>
