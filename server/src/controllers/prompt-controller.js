const openai = require("../config/openia")
const InputPrompt = require("../models/input-prompt")

module.exports = {
    async sendText(req, res){
        console.log('sedText')
        console.log(res);
        
        const openiaAPI = openai.configuration()
        const inputModel = new InputPrompt(req.body)

        try {
            const response = await openiaAPI.completions.create(
                openai.textCompletion(inputModel)
            )
            console.log(response)
            return res.status(200).json({sucess: true, data: response.data.choices[0]})
        } catch (error) {
            return res.status(400).json({
                sucess: false,
                error: error.response ? error.response.data : 'Ocorreu um erro no servidor'
            })
        }
    }
}