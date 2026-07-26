# Banner media

Drop your own footage here as `hero.mp4` and the first banner slide plays it.

Until that file exists the slide falls back to its poster image, so the banner
never looks broken — nothing else needs changing.

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
