const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");


const app = express();

mongoose.connect("mongodb+srv://jesusfb:Dove3229-@cluster0.yx9sjqo.mongodb.net/")
  .then(() => console.log("DB Connected"))
  .catch((e) => {
    console.error("DB Connection Error:", e);
    process.exit(1); // Exit the process with failure
  });

app.use(cors({ origin: ["https://vendor-backend.vercel.app"] }));
app.use(express.json());
app.use("/", userRouter);
app.use(errorHandler);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
