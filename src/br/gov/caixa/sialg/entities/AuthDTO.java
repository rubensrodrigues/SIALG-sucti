package br.gov.caixa.sialg.entities;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class AuthDTO {

	private String auth;
	private String token;
	private String urlBOE;
	private String urlOpenDocument;
	
	
	
	public String getAuth() {
		return auth;
	}
	public void setAuth(String auth) {
		this.auth = auth;
	}
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public String getUrlBOE() {
		return urlBOE;
	}
	public void setUrlBOE(String urlBOE) {
		this.urlBOE = urlBOE;
	}
	public String getUrlOpenDocument() {
		return urlOpenDocument;
	}
	public void setUrlOpenDocument(String urlOpenDocument) {
		this.urlOpenDocument = urlOpenDocument;
	}
	
	
}
