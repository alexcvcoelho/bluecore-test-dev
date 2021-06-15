If Not Exists(Select 1 From INFORMATION_SCHEMA.TABLES Where TABLE_NAME = 'User' And TABLE_SCHEMA = 'dbo')
Begin
	Create Table dbo.User(
		Id Int Not Null Identity(1,1) Constraint PK_tty_User_Id Primary Key (Id),
		Name VarChar(255) Not Null
	)
End