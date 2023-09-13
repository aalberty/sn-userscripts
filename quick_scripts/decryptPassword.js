var tableName = ""; //e.g. incident
var sysId = ""; //sys_id of the target record
var encryptedFieldName = ""; //technical name of the encrypted password field
var ge = new GlideEncrypter();
var gr = new GlideRecord(tableName);
if (gr.get(sysId)) {
  gs.info(ge.decrypt(gr[encryptedFieldName]));
}
