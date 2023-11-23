import log from '../../config/winston';
// Action Methods

// GET '/user/login'
const login = (req, res) => {
  // Sirve el formulario de login
  log.info('Se entrega formulario de login');
  res.render('user/login');
};

// GET '/user/logout'
const logout = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION GET  '/user/logout' 🚧");
};

// GET '/user/register'
const register = (req, res) => {
  res.send("🚧 UNDER CONSTRUCTION GET  '/user/register' 🚧");
};

export default {
  login,
  logout,
  register,
};
