# Thumnail Resize ReactJs App

![alt text](public/images/Thumnail-Resize-ReactJs.png.png)

 Tool use in Project :
 - npm i get-youtube-id
 - animate css
 - react-toastify
 - remix-icon



Link Use :
- 120x90
https://img.youtube.com/vi/VIDEO_ID/default.jpg

- 320x180
https://img.youtube.com/vi/VIDEO_ID/mqdefault.jpg

- 480x360
https://img.youtube.com/vi/VIDEO_ID/hqdefault.jpg

- 640x480
https://img.youtube.com/vi/VIDEO_ID/sddefault.jpg

- 1280×720
https://img.youtube.com/vi/VIDEO_ID/maxresdefault.jpg



I
































const YT_BASE = "https://img.youtube.com/vi/";

const fetchThumbnail = async (e) => {
  e.preventDefault();

  const videoId = getYouTubeID(url);

  if (!videoId) {
    toast.error("Invalid YouTube URL");
    return;
  }

  // Supported thumbnail qualities ordered by quality
  const qualities = [
    "maxresdefault.jpg",
    "hqdefault.jpg",
    "mqdefault.jpg",
    "default.jpg"
  ];

  // Try each quality until one works
  const findValidThumbnail = async (id) => {
    for (let q of qualities) {
      const testUrl = `${YT_BASE}${id}/${q}`;
      
      const res = await fetch(testUrl, { method: "HEAD" });
      if (res.ok) return q; // found valid one
    }
    return "default.jpg"; // fail-safe
  };

  const bestFile = await findValidThumbnail(videoId);

  const model = urlModel.map((item) => {
    const finalUrl = `${YT_BASE}${videoId}/${bestFile}`;

    return {
      ...item,
      url: finalUrl
    };
  });

  setThumnails(model);
};
