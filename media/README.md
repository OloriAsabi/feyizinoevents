# Banner media

`hero.mp4` plays as the first slide of the landing page banner.

**Replace it with your own event footage when you have it** — same filename,
nothing else to change. The current clip is a placeholder: a wedding ceremony
from [Mixkit](https://mixkit.co/free-stock-video/wedding-ceremony-5217/), used
under the Mixkit Free License, which permits commercial use with no
attribution. Your own work will always sell the business better than stock.

If the file is ever missing, the slide falls back to its poster image rather
than rendering empty.

Guidelines for `hero.mp4`:

- **Format:** MP4 (H.264 + AAC), which every browser plays.
- **Length:** 10–15 seconds, looping. It is muted, so audio is ignored.
- **Size:** keep it under ~8 MB. It loads on every visit, much of that on
  Nigerian mobile data.
- **Framing:** the left third sits under the headline, so keep the subject
  right of centre.

To add more slides, or point at a different file, edit `heroSlides` at the top
of `app.js`. Each entry is either:

```js
{ type: 'video', src: 'media/hero.mp4', poster: '<image url>', alt: '...', duration: 12000 }
{ type: 'image', src: '<image url>', alt: '...', duration: 6500 }
```

`duration` is how long the slide holds, in milliseconds.
