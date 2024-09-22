const BlogsSchema = require("../schema/Blogs")
class Blogs {
    async fetchBlogs(req, res) {
        try {
            const { id } = req.query;
            let blogs;
            if (id)
                blogs = await BlogsSchema.findById(id);
            else
                blogs = await BlogsSchema.find()
            return res.status(200).json({
                status: true,
                message: "Success",
                data: blogs
            });
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
                data: null
            });
        }
    }
    async deleteBlog(req, res) {
        try {
            debugger;
            const { id } = req.params;

            const blog = await BlogsSchema.findByIdAndRemove(id);

            if (!blog) {
                return res.status(404).json({
                    status: false,
                    message: "Blog not found",
                    data: null
                });
            }

            return res.status(200).json({
                status: true,
                message: "Blog deleted successfully",
                data: blog
            });

        } catch (error) {
            // Catch any server errors and return 500
            console.error(error);
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
                data: null
            });
        }
    }

    async updateBlog(req, res) {
        try {
            const { id, title, description, blogText } = req.body;
            const newData = { title: title, description: description, blogText: blogText };
            if (id) {
                BlogsSchema.findByIdAndUpdate(id, newData, (error, docs) => {
                    if (error)
                        throw error;
                    else
                        return res.status(200).json({
                            status: true,
                            message: "Success",
                            data: docs
                        });
                });

            }
        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
                data: null
            });
        }
    }
    async createBlog(req, res) {
        try {
            const { title, description, blogText } = req.body;
            const newData = { title: title, description: description, blogText: blogText };
            if (title, description, blogText) {
                const blogs = await BlogsSchema.create(newData);
                return res.status(200).json({
                    status: true,
                    message: "Success",
                    data: blogs
                });
            } else
                throw "Some Error in Inserting"

        } catch (error) {
            console.error(error);
            return res.status(500).json({
                status: false,
                message: "Internal Server Error",
                data: null
            });
        }
    }
}

module.exports = new Blogs();