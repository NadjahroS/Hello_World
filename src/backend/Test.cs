using RestSharp;

namespace backend;
public class Run
{
    static void Main()
    {
        Test test = new Test();
        test.test();
    }
}


public class Test
{
    public void test()
    { 
        var client = new RestClient("https://dev-xmsy4k5t5v2yf225.us.auth0.com/oauth/token");
        var request = new RestRequest("POST");
        request.AddHeader("content-type", "application/json");
        request.AddParameter("application/json", "{\"client_id\":\"WnNWNMh7gRAl59y75bStc39n3mP3s3fS\",\"client_secret\":\"nD1-VanYLFQwnYJFWg-KQtP-cXB6Oa_MSS96P2KDV0Dkd6LnRSmn9c12pgWudo34\",\"audience\":\"https://hello/api\",\"grant_type\":\"client_credentials\"}", ParameterType.RequestBody);
        RestResponse response = client.Execute(request);

        Console.WriteLine("Response Content:");
        Console.WriteLine(response.Content);
    }
}
