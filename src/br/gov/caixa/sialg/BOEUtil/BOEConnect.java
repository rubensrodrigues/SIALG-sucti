package br.gov.caixa.sialg.BOEUtil;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;
import java.util.ResourceBundle;

import org.apache.axis2.AxisFault;

import com.businessobjects.dsws.Connection;
import com.businessobjects.dsws.session.EnterpriseCredential;
import com.businessobjects.dsws.session.Session;
import com.businessobjects.dsws.session.SessionInfo;

import br.gov.caixa.sialg.entities.AuthDTO;

public class BOEConnect {

	public AuthDTO login(String username, String password)  throws Exception, AxisFault, MalformedURLException{
		
		String usuario = username;
		String senha = password;
		
		AuthDTO auth = new AuthDTO();
		
		/**
		 * BUSCANDO DO ARQUIVO PROPERTIES
		 */
		String urlBOE = getProperty("urlBOE");
		String domain = getProperty("domain");
		String urlOpenDocument = getProperty("urlOpenDocument");

		if(urlBOE == null){
			throw new Exception("Erro ao buscar arquivo de configura��es de conex�o ao BOE");
		}else{
		
			/**
			 * FIXO PARA DESENVOLVIMENTO
			 */
	//		String urlBOE = "http://SRJDEAPLNT0018.desenvolvimento.extracaixa:8080/dswsbobje/services/Session";
	//		String domain = "SRJDEAPLNT0018:6400";
	//		String urlOpenDocument = "http://SRJDEAPLNT0018.desenvolvimento.extracaixa:8080/BOE/OpenDocument/opendoc/openDocument.jsp";
	
			/**
			 * FIXO PARA PRODU��O
			 */
	//		String urlBOE = "http://inteligenciadenegocio.caixa.gov.br/dswsbobje/services/Session";
	//		String domain = "@SAPCLTPRD01";
	//		String urlOpenDocument = "https://inteligenciadenegocio.caixa.gov.br/BOE/OpenDocument/opendoc/openDocument.jsp";
	
			try{
				
				URL objURLSession = new URL(urlBOE);
				
				Connection objConnection = new Connection(objURLSession);
				Session objSession = new Session(objConnection);
				
				EnterpriseCredential objEnterpriseCredential = EnterpriseCredential.Factory.newInstance();
				objEnterpriseCredential.setLogin(usuario);
				objEnterpriseCredential.setPassword(senha);
				objEnterpriseCredential.setDomain(domain);
				objEnterpriseCredential.setLocale("pt_BR");
				objEnterpriseCredential.setTimeZone("GMT+03:00");
				objEnterpriseCredential.setAuthType("secWinAD");
		
				SessionInfo objSessionInfo = objSession.login(objEnterpriseCredential);
				
				System.out.println("token:");
				System.out.println(objSessionInfo.getDefaultToken());
				auth.setToken(objSessionInfo.getDefaultToken());
				auth.setUrlBOE(urlBOE);
				auth.setUrlOpenDocument(urlOpenDocument);
			}catch (Exception eAD) {
				try{
					URL objURLSession = new URL(urlBOE);
					
					Connection objConnection = new Connection(objURLSession);
					Session objSession = new Session(objConnection);
					
					EnterpriseCredential objEnterpriseCredential = EnterpriseCredential.Factory.newInstance();
					objEnterpriseCredential.setLogin(usuario);
					objEnterpriseCredential.setPassword(senha);
					objEnterpriseCredential.setDomain(domain);
					objEnterpriseCredential.setLocale("pt_BR");
					objEnterpriseCredential.setTimeZone("GMT+03:00");
					objEnterpriseCredential.setAuthType("secEnterprise");
			
					SessionInfo objSessionInfo = objSession.login(objEnterpriseCredential);
					
					System.out.println("token:");
					System.out.println(objSessionInfo.getDefaultToken());
					auth.setToken(objSessionInfo.getDefaultToken());
					auth.setUrlBOE(urlBOE);
					auth.setUrlOpenDocument(urlOpenDocument);
				}catch (Exception eEnterprise) {
					URL objURLSession = new URL(urlBOE);
					
					Connection objConnection = new Connection(objURLSession);
					Session objSession = new Session(objConnection);
					
					EnterpriseCredential objEnterpriseCredential = EnterpriseCredential.Factory.newInstance();
					objEnterpriseCredential.setLogin(usuario);
					objEnterpriseCredential.setPassword(senha);
					objEnterpriseCredential.setDomain(domain);
					objEnterpriseCredential.setLocale("pt_BR");
					objEnterpriseCredential.setTimeZone("GMT+03:00");
					objEnterpriseCredential.setAuthType("secLDAP");
			
					SessionInfo objSessionInfo = objSession.login(objEnterpriseCredential);
					
					System.out.println("token:");
					System.out.println(objSessionInfo.getDefaultToken());
					auth.setToken(objSessionInfo.getDefaultToken());
					auth.setUrlBOE(urlBOE);
					auth.setUrlOpenDocument(urlOpenDocument);
				}	
			}
		}
		return auth;
	}
	
	private String getProperty(String property){
		String value = null;
		
		File configDir =  new File(System.getProperty("catalina.base"), "app_config");
		File configFile = new File(configDir, "RelatoriosSIALG.properties");
		InputStream stream;
		try {
			stream = new FileInputStream(configFile);
			Properties props = new Properties();
			props.load(stream);
			value = props.getProperty(property);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
//		try {
//			ResourceBundle rb = ResourceBundle.getBundle("RelatoriosSIALG");
//			 value = rb.getString(property);
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
		return value;
	}

	
	
}
