import React from "react";
import { Box, Image } from "theme-ui";
import sx from "./sx";
import hoverBook from "../../../../assets/img/hoverBook.png";

const BookDetail = () => {
  return (
    <>
      <Box sx={sx.wrapper}>
        <Box sx={sx.left}>
          <Box sx={sx.imageBox}>
            <Image src="https://picsum.photos/200/300" sx={sx.image} />
          </Box>
        </Box>
        <Box sx={sx.right}>
          <Box sx={sx.nameBox}>
            <Box>
              <Box sx={sx.title}>Dune (Hardback)</Box>
              <Box sx={sx.author}>Frank Herbert (author)</Box>
            </Box>
            <Image src={hoverBook} sx={sx.newBook} />
          </Box>
        </Box>
      </Box>
      <Box sx={sx.secondWrapper}>
        <Box sx={sx.secondLeft}> </Box>
        <Box sx={sx.secondRight}>
          <Box>
            <Box sx={sx.title}>Description</Box>
            <Box sx={sx.author}>By Diana M. Fisher</Box>
          </Box>
          <Box sx={sx.description}>
            Lessons in Mathematics: A Dynamic Approach by Diana Fisher provides
            a set of materials that can be used to supplement current curriculum
            for Algebra I, Algebra II, Pre-Calculus and Calculus classes.
            Students build understanding of abstract mathematical functions
            (such as linear, quadratic, and exponential) by creating models
            using the Stella software. They then can make use of the software's
            simulation capabilities to explore solutions to real-world problems.
            Materials meet National Science Education Standards (NSES) and
            National Council of Teachers of Mathematics (NCTM) standards and are
            out-of-the-box ready for use in your classroom today. If you’re a
            science teacher, you’ll find many of the lessons contained in this
            book provide a powerful vehicle for explaining basic science
            concepts. The motion lessons found throughout the book, for example,
            can be used to introduce, reinforce, or supplement concepts taught
            in the physical science and/or physics curriculum. Similarly, the
            population dynamics lessons can be used in the context of many
            classes in the life sciences. Other lessons such as “Contagious
            Diseases” and “Lead in the Body” offer real-world case studies that
            are highly applicable to the more mathematically rigorous classes in
            the sciences. This book is the teacher's edition and includes a
            download containing PDFs of all student exercises, as well as the
            save-disabled version of the Stella software that can be used by
            students to complete the exercises. Product Details Paperback: 327
            pages Publisher: isee systems, inc. Published: 2001 Language:
            English ISBN-10: 0975316915 ISBN-13: 978-0975316917 This an
            affiliate product that the Society has partnered with isee systems
            to offer. The Society will receieve a commission if purchased
            through our site.
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default BookDetail;
