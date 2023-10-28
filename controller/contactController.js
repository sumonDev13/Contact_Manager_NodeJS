

export const getContacts = (req,res)=>{
    res.status(200).json({message: 'contacts'});
}

export const createContact = (req,res)=>{

    console.log('body:',req.body);

    const {name,email,phone} = req.body;
    try {
        if(!name || !email || !phone){
            res.status(404).json({message: 'all fields required'});
        }
        
    } catch (error) {
        
    }
    res.status(201).json({message: 'create contact'});
}

export const updateContact = (req,res)=>{
    res.status(200).json({message: `update contact ${req.params.id}`});
}

export const deleteContact = (req,res)=>{
    res.status(200).json({message:`delete contact ${req.params.id}` });
}
