let videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "2 minutes ago",
    views: 1,
    id: 1,
  },
  {
    title: "Video #2",
    title: "Second Video",
    rating: 2,
    comments: 3,
    createdAt: "2 minutes ago",
    views: 12,
    id: 2,
  },
  {
    title: "Whatsup",
    title: "Third Video",
    rating: 1,
    comments: 42,
    createdAt: "2 minutes ago",
    views: 49,
    id: 3,
  },
];

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  // = const id = req.params.id 위의 방법은
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const deleteVideo = (req, res) => res.send("Delete Video");
