const express = require('express');
const router = express.Router();
const Article=require("../models/article")
const {verifyToken} =require("../middleware/verif-token")
const { uploadFile } = require('../middleware/upload-file')
// afficher la liste des articles.
router.get('/', verifyToken, async (req, res, )=> {
    try {
        const articles = await Article.find();
                
        res.status(200).json(articles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }

});
// créer un nouvel article
router.post('/', verifyToken,uploadFile.single("imageart"),async (req, res) =>  {
    const {reference,designation,prix,marque,qtestock,scategorieID} = req.body
    const imageart = req.file.filename
    const nouvarticle = new Article({reference:reference,designation:designation,prix:prix,marque:marque,qtestock:qtestock,scategorieID:scategorieID,imageart:imageart})

    try {
        await nouvarticle.save();

        res.status(200).json(nouvarticle );
    } catch (error) {
        res.status(404).json({ message: error.message });
    }


});
// chercher un article
router.get('/:articleId',async(req, res)=>{
    try {
        const art = await Article.findById(req.params.articleId);
        
        res.status(200).json(art);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});
// modifier un article


router.put('/:articleId', async (req, res)=> {
   try {
    const art = await Article.findByIdAndUpdate(
        req.params.articleId,
        { $set: req.body },
      { new: true }
    );
    res.status(200).json(art);
    } catch (error) {
    res.status(404).json({ message: error.message });
    }
});
// Supprimer un article
router.delete('/:articleId', async (req, res)=> {
    const  id  = req.params.articleId;
    await Article.findByIdAndDelete(id);

    res.json({ message: "article deleted successfully." });

});
module.exports = router;
