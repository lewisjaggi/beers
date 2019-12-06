import pandas as pd

df = pd.read_csv("../data/wikipedia-iso-country-codes.csv")

output = "var iso2to3 = {"
for _,row in df.iterrows():
    output += f"'{row['Alpha-2 code']}' : '{row['Alpha-3 code']}',"

output += "};"

output += "\nvar iso3to2 = {"
for _,row in df.iterrows():
    output += f"'{row['Alpha-3 code']}' : '{row['Alpha-2 code']}',"

output += "};"

output += "\nvar iso2toName = {"
for _,row in df.iterrows():
    output += f"'{row['Alpha-2 code']}' : \"{row['English short name lower case']}\","

output += "};"

output += """\n
function convertIso3ToIso2(iso3)
{
    return iso3to2[iso3];
}

function convertIso2ToIso3(iso2)
{
    return iso2to3[iso2];
}

function convertIso2ToName(iso2)
{
    return iso2toName[iso2];
}
"""

with open("isoConverter.js","w+") as f :
    f.write(output)