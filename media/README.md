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

## Why the banner clip is still stock

The three walkthroughs in `works/` were considered for this slot and did not
fit. They are portrait phone footage, and the banner is a wide landscape box,
so `object-fit: cover` shows only the middle third of the frame. Worse,
macOS's `avconvert` — the only transcoder on the build machine — can shrink
the *longest* edge only, so a 1080x1920 clip comes out 607px wide however low
the preset goes, at around 17 MB per 10 seconds.

Installing `ffmpeg` would fix both: crop the centre band to 16:9, then set a
real bitrate. Until then the banner keeps the Mixkit clip, with a real
Feyizino photograph as its poster.

## `works/` — portfolio media

Stills and walkthrough clips from real Feyizino events, listed in
`featuredWorks`, `galleryImages`, and `galleryVideos` in `app.js`.

The originals are a phone drop in `assets/our works/` (gitignored): HEIC and
PNG stills plus three 70–86 second `.MOV` files at roughly 120 MB each. What
ships here is resized — stills at 1400px, clips as 20-second highlights at
540p, around 12 MB each.

Two things to know before adding more:

- **Check which way up a frame is.** The HEIC files carry no EXIF
  orientation, so two of them arrived on their side and had to be rotated by
  hand. Nothing in the file tells you; you have to look.
- **Check what the event actually is.** One of the clips is a funeral — the
  signage reads "Celebration of Life" a few seconds in, and it was filed
  beside the weddings. It is captioned as such, and should stay that way.

The clips are `preload="none"` behind a poster image, so a visit costs one
JPEG and the video only downloads if a visitor presses play.
