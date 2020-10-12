module.exports = (sequelize, DataTypes) => {
    const meeting_with_doc = sequelize.define("meeting_with_doc",{
        doc_id:{
            type: DataTypes.STRING,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phno:{
            type: DataTypes.BIGINT,
            allowNull:false
        },
        start_date:{
            type: DataTypes.DATE,
            allowNull: false,
            unique:true
        },
        end_date:{
            type: DataTypes.DATE,
            allowNull: false
        }
    });
    return meeting_with_doc;
};