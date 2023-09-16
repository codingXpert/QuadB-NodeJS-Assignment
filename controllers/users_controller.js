const db = require("../config/mySql");
const User = db.users;
 
//rendering the form
module.exports.insert = (req, res) => {
    try {
        return res.render("insert_user");
    } catch (error) {
      console.log(error);
      return res.status(500).json({ Error: error.message });
    }
  };
 
// POST route to insert user data
module.exports.create =  async (req, res) => {
    console.log(req.body);
    try {
        const { user_name, user_email, user_password, total_orders } = req.body;
        const user_image = req.file.filename;

        const newUser = await User.create({
            user_name,
            user_email,
            user_password,
            user_image,
            total_orders,
        });

        res.status(201).json(newUser);
    } catch (error) {
        if (error.name === 'SequelizeUniqueConstraintError') {
            return res.status(422).json({ message: 'User already exists' });
          } else {
            console.error(error);
            return res.status(500).json({ error: error.message });
          }
    }
};


// getUserDetails by id
module.exports.getUserDetails = async (req, res) => {
    try {
        const userId = req.params.id; 
        const user = await User.findByPk(userId, {
            attributes: { exclude: ["user_password"] }
        });
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
}

module.exports.getUserImage = async (req, res) => {
    try {
        const userId = req.params.id; 
        const user = await User.findByPk(userId);
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        return res.status(200).json({ user_image: user.user_image });

    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}

// delete userDetails
module.exports.deleteUserDetail = async (req, res) => {
    try {
      const { user_id } = req.params;
      const user = await User.findByPk(user_id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
      await User.destroy({where: { user_id }});
      return res.status(200).json({
        message: 'User details deleted successfully',
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };


  // update user details
module.exports.updateUserDetail = async (req, res) => {
    console.log(req.file.filename);
    try {
      const { user_id } = req.params;
      const newDetails = req.body;
      const user_image = req.file.filename;
      const user = await User.findByPk(user_id);
  
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      // update userDetails
      await User.update(newDetails, {where: { user_id }});
      const updatedUser = await User.findByPk(user_id);
  
      return res.status(200).json({
        message: 'User details updated successfully',
        user: updatedUser,
      });
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  };