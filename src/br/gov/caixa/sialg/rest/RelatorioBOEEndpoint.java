package br.gov.caixa.sialg.rest;

import java.net.MalformedURLException;
import java.util.ResourceBundle;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.HttpHeaders;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import org.apache.axis2.AxisFault;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.jersey.core.util.Base64;

import br.gov.caixa.sialg.BOEUtil.BOEConnect;
import br.gov.caixa.sialg.entities.AuthDTO;

@Path("/service")
public class RelatorioBOEEndpoint {

	@POST
	@Path("/auth")
	@Produces(MediaType.APPLICATION_JSON)
	public Response Login(@Context HttpHeaders headers) {

		String headerEncoded = headers.getRequestHeader("Authorization").get(0);
		headerEncoded = headerEncoded.replace("Basic ", "");
		String readerAuth = new String(Base64.base64Decode(headerEncoded));
		String[] auth = readerAuth.split(":");
		
		BOEConnect testeConexao = new BOEConnect();
		AuthDTO authdto = null;
		try {
			authdto = testeConexao.login(auth[0], auth[1]);
			authdto.setAuth(headerEncoded);
		} catch (AxisFault e) {
			e.printStackTrace();
			String erro ="{ \"error\":\"Falha ao autenticar no BOE!\", \"trace\":\""+e.getMessage()+"\" }"; 
			return Response.ok(erro, MediaType.APPLICATION_JSON).build();
		}catch (MalformedURLException e) {
			e.printStackTrace();
			String erro = "{ \"error\":\"Falha ao autenticar no BOE!\", \"trace\":\""+e.getMessage()+"\" }";
			return Response.ok(erro, MediaType.APPLICATION_JSON).build();
		}catch (Exception e) {
			e.printStackTrace();
			String erro = "{ \"error\":\"Falha ao autenticar no BOE!\", \"trace\":\""+e.getMessage()+"\" }";
			return Response.ok(erro, MediaType.APPLICATION_JSON).build();
		}
		ObjectMapper mapper = new ObjectMapper();
		String jsonInString = "";
		try {
			jsonInString = mapper.writeValueAsString(authdto);
		} catch (JsonProcessingException e) {
			e.printStackTrace();
		}
		return Response.ok(jsonInString , MediaType.APPLICATION_JSON).build();
	}
	
}








