#Imports

import pandas as pd
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import Table,Column,Integer,String,Boolean,Date,Float
import glob
import os
from sqlalchemy import MetaData
from sqlalchemy.orm import mapper

#SQL Alchemy setup

#Create engine that will allow us to communicate with database
engine=create_engine('sqlite:///beers.sqlite',echo=False)

#Creating session which is the middle ground to talk to our engine
Session=sessionmaker(bind=engine)
session=Session()

#Map which table in database will be related to each class
Base=declarative_base()

#Create a metadata instance
#A metadata is an object container that will store attributes and name of table 
metadata=MetaData(engine)

#Define structure of table
class reviews(object):
    def __init__(self,number,description,ref_des):
        self.id=id
        self.beer_id=beer_id
        self.date=date 
        self.look=look 
        self.smell=smell      
        self.taste=taste
        self.feel=feel
        self.overall=overall
        self.score=score
    


    
#Declaring a table
#Defining a function that defines table, we define this function so that we can keep table names dynamic
#That is, we can have multiple tables in database and each table can have a different name
def table_definition(table_name):
    #Define table structure, here table_name varies
    #We want to make table_define available outside function so we declare it as a function attribute
    table_definition.table_define=Table(table_name,metadata,
    Column('id',Integer,primary_key=True),
    Column('beer_id',Integer),
    Column('date',Date),
    Column('look',Float),
    Column('smell',Float),
    Column('taste',Float),
    Column('feel',Float),
    Column('overall',Float),
    Column('score',Float)
    )
    
    #Create table
    #Note that we used the engine from function
    metadata.create_all(engine)
    
    #Use mapper to define components of class as well as table definition together at once
    mapper(reviews,table_definition.table_define,non_primary=True)

#CREATING A DUMMY BLANK TABLE FOR PRIMARY MAPPER
#This avoids error: Class already has a primary mapper defined
#We made non_primary=True in table_definition function mapper
#This is the work around I could use, maybe there is another way

#Define table structure, here table_name varies
table_define_dummy=Table('dummy_table_rew',metadata,
Column('id',Integer,primary_key=True),
Column('beer_id',Integer),
Column('date',Date),
Column('look',Float),
Column('smell',Float),
Column('taste',Float),
Column('feel',Float),
Column('overall',Float),
Column('score',Float)
)   


#Create table
metadata.create_all(engine)

#Use mapper to define components of class as well as table definition together at once
mapper(reviews,table_define_dummy)

#This function will create a separate table for each csv file, if you have multiple csv files
#Name of table will be extracted from file name. File name contains product name. 
#Each table will be identified by product name
# It will read each excel file in the folder and insert bom into table
def create_table(file_name):
    
    #Get list of files in folder
    
    #Loop through all files in list
        
    #Read file into dataframe
    csv_data=pd.read_csv(file_name)
    
    #Convert dataframe to list and store in same variable
    csv_data=csv_data.values.tolist()
    #Get table name from file name. This will be our table name. 
    table_name_from_file=file_name.split('/')[2][:-4]
    
    #Use table_definition function to define table structure
    table_definition(table_name_from_file)
    conn=engine.connect()
    #Loop through list of lists, each list in create_bom_table.xls_data is a row
    for row in csv_data:
        #Each element in the list is an attribute for the table class
        #Iterating through rows and inserting into table
        ins=table_definition.table_define.insert().values(beer_id=row[1],date=row[2],
        look=row[3],smell=row[4],taste=row[5],feel=row[6],overall=row[7],score=row[8])
        conn.execute(ins)
            

#Calling function, argument is path of folder where all CSV files are stored
create_table("../data/reviews.csv")