const Company = require('../models/company')

const companyController = {
    addCompany: async (req, res) => {

     try {

        //get the userId from the request parameter

        const userId = req.params.userId;

        //get the details from the request body

        const { name, location } = req.body;

        //create a new company object

        const newCompany = new Company({
            name,
            location,
            user:userId
        })

        // save the company object to the database, to show it to frontend save it in a variable

        const savedCompany = await newCompany.save();

        //send the saved company object to the database

        res.status(201).send({
            message: 'Company added successfully',
            company: savedCompany});

     }
     catch(error){
        res.status(500).send({ message: error.message })
     }
    },
     getAllCompanies: async (req, res) => {

        try {
            // Get all the companies from the database

            // populate - to join two tables, here companies and users has joined and displayed name and email

            const companies = await Company.find().populate('user', 'name email');

            // Send the companies as a response

            res.status(200).send(companies);
            
        } catch (error) {
            res.status(500).send({ message: error.message} )
        }
     
        

    }
}

module.exports = companyController;