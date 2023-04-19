using System.Collections;
using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Create copies of a ball object to fallon the game scene
/// </summary>
public class ThrowBalls : MonoBehaviour
{
    [SerializeField] float delay;
    [SerializeField] GameObject ball;
    [SerializeField] float limit;
    // Start is called before the first frame update
    void Start()
    {
        InvokeRepeating("CreateBall",delay,delay);
    }

 void CreateBall()
        {
            Vector3 newPos = new Vector3(Random.Range(-limit, limit), 5, 0);
            //Create a copy of the ball prefab
            Instantiate(ball, newPos, Quaternion.identity);
        }
    // Update is called once per frame
}
