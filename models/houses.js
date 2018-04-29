'use strict';

module.exports = function(sequelize, DataTypes)
{
	const housees = sequelize.define('house' , 
		{
			houseID:
			{
				type: DataTypes.INTEGER,
				primaryKey: true,
				allowNull: false,
				autoIncrement: true

			}, // End of houseID field definition

			houseName:
			{
				DataTypes: DataTypes.STRING,
				allowNull: false

			}, // End of the houseName field definition

			theList:
			{
				type: DataTypes.TEXT
			}

		} // End of const houses = sequelize.define('house',

	); //End of const housees = sequelize.define('house' , 

} // End of module.exports = function()