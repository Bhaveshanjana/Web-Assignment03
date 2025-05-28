const createproduct = async (req, res) => {
  return res.status(200).json({ message: "product created successfully" });
};

const updateproduct = async (req, res) => {
  return res.status(200).json({ message: "Update product successfully" });
};

const getallproduct = async (req, res) => {
  return res.status(200).json({ message: "Get all product successfully" });
};

const deleteproduct = async (req, res) => {
  return res.status(200).json({ message: "Product Deleted successfully" });
};

export default {
  getallproduct,
  createproduct,
  updateproduct,
  deleteproduct,
};
