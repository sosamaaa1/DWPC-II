// Action Methods
// GET "/"
// GET "/index"
const home = (req, res) => {
  const iconSet = ['⭐', '🤖', '🍉'];
  const icon = iconSet[Math.floor(Math.random() * 3)];
  // res.render('index', { title: 'DWPCII-2023A', icon });
  res.render('home/homeView', { icon });
};

const about = (req, res) => {
  res.render('home/aboutView', { appVersion: '1.0.0' });
};

export default {
  home,
  about,
};
